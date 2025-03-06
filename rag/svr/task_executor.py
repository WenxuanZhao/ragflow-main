#
#  Copyright 2024 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

# from beartype import BeartypeConf
# from beartype.claw import beartype_all  # <-- you didn't sign up for this
# beartype_all(conf=BeartypeConf(violation_type=UserWarning))    # <-- emit warnings from all code
import random
import sys
<<<<<<< HEAD
from api.utils.log_utils import initRootLogger
=======

from api.utils.log_utils import initRootLogger, get_project_base_directory
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
from graphrag.general.index import WithCommunity, WithResolution, Dealer
from graphrag.light.graph_extractor import GraphExtractor as LightKGExt
from graphrag.general.graph_extractor import GraphExtractor as GeneralKGExt
from graphrag.utils import get_llm_cache, set_llm_cache, get_tags_from_cache, set_tags_to_cache
<<<<<<< HEAD
=======
from rag.prompts import keyword_extraction, question_proposal, content_tagging
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

CONSUMER_NO = "0" if len(sys.argv) < 2 else sys.argv[1]
CONSUMER_NAME = "task_executor_" + CONSUMER_NO
initRootLogger(CONSUMER_NAME)

import logging
import os
from datetime import datetime
import json
import xxhash
import copy
import re
<<<<<<< HEAD
import time
import threading
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
from functools import partial
from io import BytesIO
from multiprocessing.context import TimeoutError
from timeit import default_timer as timer
import tracemalloc
<<<<<<< HEAD
=======
import resource
import signal
import trio
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

import numpy as np
from peewee import DoesNotExist

from api.db import LLMType, ParserType, TaskStatus
<<<<<<< HEAD
from api.db.services.dialog_service import keyword_extraction, question_proposal, content_tagging
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
from api.db.services.document_service import DocumentService
from api.db.services.llm_service import LLMBundle
from api.db.services.task_service import TaskService
from api.db.services.file2document_service import File2DocumentService
from api import settings
from api.versions import get_ragflow_version
from api.db.db_models import close_connection
from rag.app import laws, paper, presentation, manual, qa, table, book, resume, picture, naive, one, audio, \
    email, tag
from rag.nlp import search, rag_tokenizer
from rag.raptor import RecursiveAbstractiveProcessing4TreeOrganizedRetrieval as Raptor
from rag.settings import DOC_MAXIMUM_SIZE, SVR_QUEUE_NAME, print_rag_settings, TAG_FLD, PAGERANK_FLD
from rag.utils import num_tokens_from_string
<<<<<<< HEAD
from rag.utils.redis_conn import REDIS_CONN, Payload
from rag.utils.storage_factory import STORAGE_IMPL
=======
from rag.utils.redis_conn import REDIS_CONN
from rag.utils.storage_factory import STORAGE_IMPL
from graphrag.utils import chat_limiter
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

BATCH_SIZE = 64

FACTORY = {
    "general": naive,
    ParserType.NAIVE.value: naive,
    ParserType.PAPER.value: paper,
    ParserType.BOOK.value: book,
    ParserType.PRESENTATION.value: presentation,
    ParserType.MANUAL.value: manual,
    ParserType.LAWS.value: laws,
    ParserType.QA.value: qa,
    ParserType.TABLE.value: table,
    ParserType.RESUME.value: resume,
    ParserType.PICTURE.value: picture,
    ParserType.ONE.value: one,
    ParserType.AUDIO.value: audio,
    ParserType.EMAIL.value: email,
    ParserType.KG.value: naive,
    ParserType.TAG.value: tag
}

<<<<<<< HEAD
CONSUMER_NAME = "task_consumer_" + CONSUMER_NO
PAYLOAD: Payload | None = None
BOOT_AT = datetime.now().astimezone().isoformat(timespec="milliseconds")
PENDING_TASKS = 0
LAG_TASKS = 0

mt_lock = threading.Lock()
DONE_TASKS = 0
FAILED_TASKS = 0
CURRENT_TASK = None

=======
UNACKED_ITERATOR = None
CONSUMER_NAME = "task_consumer_" + CONSUMER_NO
BOOT_AT = datetime.now().astimezone().isoformat(timespec="milliseconds")
PENDING_TASKS = 0
LAG_TASKS = 0
DONE_TASKS = 0
FAILED_TASKS = 0

CURRENT_TASKS = {}

MAX_CONCURRENT_TASKS = int(os.environ.get('MAX_CONCURRENT_TASKS', "5"))
MAX_CONCURRENT_CHUNK_BUILDERS = int(os.environ.get('MAX_CONCURRENT_CHUNK_BUILDERS', "1"))
task_limiter = trio.CapacityLimiter(MAX_CONCURRENT_TASKS)
chunk_limiter = trio.CapacityLimiter(MAX_CONCURRENT_CHUNK_BUILDERS)

# SIGUSR1 handler: start tracemalloc and take snapshot
def start_tracemalloc_and_snapshot(signum, frame):
    if not tracemalloc.is_tracing():
        logging.info("start tracemalloc")
        tracemalloc.start()
    else:
        logging.info("tracemalloc is already running")

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    snapshot_file = f"snapshot_{timestamp}.trace"
    snapshot_file = os.path.abspath(os.path.join(get_project_base_directory(), "logs", f"{os.getpid()}_snapshot_{timestamp}.trace"))

    snapshot = tracemalloc.take_snapshot()
    snapshot.dump(snapshot_file)
    current, peak = tracemalloc.get_traced_memory()
    max_rss = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
    logging.info(f"taken snapshot {snapshot_file}. max RSS={max_rss / 1000:.2f} MB, current memory usage: {current / 10**6:.2f} MB, Peak memory usage: {peak / 10**6:.2f} MB")

# SIGUSR2 handler: stop tracemalloc
def stop_tracemalloc(signum, frame):
    if tracemalloc.is_tracing():
        logging.info("stop tracemalloc")
        tracemalloc.stop()
    else:
        logging.info("tracemalloc not running")
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

class TaskCanceledException(Exception):
    def __init__(self, msg):
        self.msg = msg


def set_progress(task_id, from_page=0, to_page=-1, prog=None, msg="Processing..."):
<<<<<<< HEAD
    global PAYLOAD
    if prog is not None and prog < 0:
        msg = "[ERROR]" + msg
    try:
        cancel = TaskService.do_cancel(task_id)
    except DoesNotExist:
        logging.warning(f"set_progress task {task_id} is unknown")
        if PAYLOAD:
            PAYLOAD.ack()
            PAYLOAD = None
        return
=======
    if prog is not None and prog < 0:
        msg = "[ERROR]" + msg
    cancel = TaskService.do_cancel(task_id)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

    if cancel:
        msg += " [Canceled]"
        prog = -1

    if to_page > 0:
        if msg:
            if from_page < to_page:
                msg = f"Page({from_page + 1}~{to_page + 1}): " + msg
    if msg:
        msg = datetime.now().strftime("%H:%M:%S") + " " + msg
    d = {"progress_msg": msg}
    if prog is not None:
        d["progress"] = prog

    logging.info(f"set_progress({task_id}), progress: {prog}, progress_msg: {msg}")
<<<<<<< HEAD
    try:
        TaskService.update_progress(task_id, d)
    except DoesNotExist:
        logging.warning(f"set_progress task {task_id} is unknown")
        if PAYLOAD:
            PAYLOAD.ack()
            PAYLOAD = None
        return

    close_connection()
    if cancel and PAYLOAD:
        PAYLOAD.ack()
        PAYLOAD = None
        raise TaskCanceledException(msg)


def collect():
    global CONSUMER_NAME, PAYLOAD, DONE_TASKS, FAILED_TASKS
    try:
        PAYLOAD = REDIS_CONN.get_unacked_for(CONSUMER_NAME, SVR_QUEUE_NAME, "rag_flow_svr_task_broker")
        if not PAYLOAD:
            PAYLOAD = REDIS_CONN.queue_consumer(SVR_QUEUE_NAME, "rag_flow_svr_task_broker", CONSUMER_NAME)
        if not PAYLOAD:
            time.sleep(1)
            return None
    except Exception:
        logging.exception("Get task event from queue exception")
        return None

    msg = PAYLOAD.get_message()
    if not msg:
        return None

    task = None
    canceled = False
    try:
        task = TaskService.get_task(msg["id"])
        if task:
            _, doc = DocumentService.get_by_id(task["doc_id"])
            canceled = doc.run == TaskStatus.CANCEL.value or doc.progress < 0
    except DoesNotExist:
        pass
    except Exception:
        logging.exception("collect get_task exception")
    if not task or canceled:
        state = "is unknown" if not task else "has been cancelled"
        with mt_lock:
            DONE_TASKS += 1
        logging.info(f"collect task {msg['id']} {state}")
        return None

    task["task_type"] = msg.get("task_type", "")
    return task


def get_storage_binary(bucket, name):
    return STORAGE_IMPL.get(bucket, name)


def build_chunks(task, progress_callback):
=======
    TaskService.update_progress(task_id, d)

    close_connection()
    if cancel:
        raise TaskCanceledException(msg)

async def collect():
    global CONSUMER_NAME, DONE_TASKS, FAILED_TASKS
    global UNACKED_ITERATOR
    try:
        if not UNACKED_ITERATOR:
            UNACKED_ITERATOR = REDIS_CONN.get_unacked_iterator(SVR_QUEUE_NAME, "rag_flow_svr_task_broker", CONSUMER_NAME)
        try:
            redis_msg = next(UNACKED_ITERATOR)
        except StopIteration:
            redis_msg = REDIS_CONN.queue_consumer(SVR_QUEUE_NAME, "rag_flow_svr_task_broker", CONSUMER_NAME)
        if not redis_msg:
            await trio.sleep(1)
            return None, None
    except Exception:
        logging.exception("collect got exception")
        return None, None

    msg = redis_msg.get_message()
    if not msg:
        logging.error(f"collect got empty message of {redis_msg.get_msg_id()}")
        redis_msg.ack()
        return None, None

    canceled = False
    task = TaskService.get_task(msg["id"])
    if task:
        _, doc = DocumentService.get_by_id(task["doc_id"])
        canceled = doc.run == TaskStatus.CANCEL.value or doc.progress < 0
    if not task or canceled:
        state = "is unknown" if not task else "has been cancelled"
        FAILED_TASKS += 1
        logging.warning(f"collect task {msg['id']} {state}")
        redis_msg.ack()
        return None, None
    task["task_type"] = msg.get("task_type", "")
    return redis_msg, task


async def get_storage_binary(bucket, name):
    return await trio.to_thread.run_sync(lambda: STORAGE_IMPL.get(bucket, name))


async def build_chunks(task, progress_callback):
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    if task["size"] > DOC_MAXIMUM_SIZE:
        set_progress(task["id"], prog=-1, msg="File size exceeds( <= %dMb )" %
                                              (int(DOC_MAXIMUM_SIZE / 1024 / 1024)))
        return []

    chunker = FACTORY[task["parser_id"].lower()]
    try:
        st = timer()
        bucket, name = File2DocumentService.get_storage_address(doc_id=task["doc_id"])
<<<<<<< HEAD
        binary = get_storage_binary(bucket, name)
=======
        binary = await get_storage_binary(bucket, name)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        logging.info("From minio({}) {}/{}".format(timer() - st, task["location"], task["name"]))
    except TimeoutError:
        progress_callback(-1, "Internal server error: Fetch file from minio timeout. Could you try it again.")
        logging.exception(
            "Minio {}/{} got timeout: Fetch file from minio timeout.".format(task["location"], task["name"]))
        raise
    except Exception as e:
        if re.search("(No such file|not found)", str(e)):
            progress_callback(-1, "Can not find file <%s> from minio. Could you try it again?" % task["name"])
        else:
            progress_callback(-1, "Get file from minio: %s" % str(e).replace("'", ""))
        logging.exception("Chunking {}/{} got exception".format(task["location"], task["name"]))
        raise

    try:
<<<<<<< HEAD
        cks = chunker.chunk(task["name"], binary=binary, from_page=task["from_page"],
                            to_page=task["to_page"], lang=task["language"], callback=progress_callback,
                            kb_id=task["kb_id"], parser_config=task["parser_config"], tenant_id=task["tenant_id"])
=======
        async with chunk_limiter:
            cks = await trio.to_thread.run_sync(lambda: chunker.chunk(task["name"], binary=binary, from_page=task["from_page"],
                                to_page=task["to_page"], lang=task["language"], callback=progress_callback,
                                kb_id=task["kb_id"], parser_config=task["parser_config"], tenant_id=task["tenant_id"]))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        logging.info("Chunking({}) {}/{} done".format(timer() - st, task["location"], task["name"]))
    except TaskCanceledException:
        raise
    except Exception as e:
        progress_callback(-1, "Internal server error while chunking: %s" % str(e).replace("'", ""))
        logging.exception("Chunking {}/{} got exception".format(task["location"], task["name"]))
        raise

    docs = []
    doc = {
        "doc_id": task["doc_id"],
        "kb_id": str(task["kb_id"])
    }
    if task["pagerank"]:
        doc[PAGERANK_FLD] = int(task["pagerank"])
    el = 0
    for ck in cks:
        d = copy.deepcopy(doc)
        d.update(ck)
        d["id"] = xxhash.xxh64((ck["content_with_weight"] + str(d["doc_id"])).encode("utf-8")).hexdigest()
        d["create_time"] = str(datetime.now()).replace("T", " ")[:19]
        d["create_timestamp_flt"] = datetime.now().timestamp()
        if not d.get("image"):
            _ = d.pop("image", None)
            d["img_id"] = ""
            docs.append(d)
            continue

        try:
            output_buffer = BytesIO()
            if isinstance(d["image"], bytes):
                output_buffer = BytesIO(d["image"])
            else:
                d["image"].save(output_buffer, format='JPEG')

            st = timer()
<<<<<<< HEAD
            STORAGE_IMPL.put(task["kb_id"], d["id"], output_buffer.getvalue())
=======
            await trio.to_thread.run_sync(lambda: STORAGE_IMPL.put(task["kb_id"], d["id"], output_buffer.getvalue()))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
            el += timer() - st
        except Exception:
            logging.exception(
                "Saving image of chunk {}/{}/{} got exception".format(task["location"], task["name"], d["id"]))
            raise

        d["img_id"] = "{}-{}".format(task["kb_id"], d["id"])
        del d["image"]
        docs.append(d)
    logging.info("MINIO PUT({}):{}".format(task["name"], el))

    if task["parser_config"].get("auto_keywords", 0):
        st = timer()
        progress_callback(msg="Start to generate keywords for every chunk ...")
        chat_mdl = LLMBundle(task["tenant_id"], LLMType.CHAT, llm_name=task["llm_id"], lang=task["language"])
<<<<<<< HEAD
        for d in docs:
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], "keywords",
                                   {"topn": task["parser_config"]["auto_keywords"]})
            if not cached:
                cached = keyword_extraction(chat_mdl, d["content_with_weight"],
                                            task["parser_config"]["auto_keywords"])
                if cached:
                    set_llm_cache(chat_mdl.llm_name, d["content_with_weight"], cached, "keywords",
                                  {"topn": task["parser_config"]["auto_keywords"]})

            d["important_kwd"] = cached.split(",")
            d["important_tks"] = rag_tokenizer.tokenize(" ".join(d["important_kwd"]))
        progress_callback(msg="Keywords generation completed in {:.2f}s".format(timer() - st))
=======

        async def doc_keyword_extraction(chat_mdl, d, topn):
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], "keywords", {"topn": topn})
            if not cached:
                async with chat_limiter:
                    cached = await trio.to_thread.run_sync(lambda: keyword_extraction(chat_mdl, d["content_with_weight"], topn))
                set_llm_cache(chat_mdl.llm_name, d["content_with_weight"], cached, "keywords", {"topn": topn})
            if cached:
                d["important_kwd"] = cached.split(",")
                d["important_tks"] = rag_tokenizer.tokenize(" ".join(d["important_kwd"]))
            return
        async with trio.open_nursery() as nursery:
            for d in docs:
                nursery.start_soon(lambda: doc_keyword_extraction(chat_mdl, d, task["parser_config"]["auto_keywords"]))
        progress_callback(msg="Keywords generation {} chunks completed in {:.2f}s".format(len(docs), timer() - st))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

    if task["parser_config"].get("auto_questions", 0):
        st = timer()
        progress_callback(msg="Start to generate questions for every chunk ...")
        chat_mdl = LLMBundle(task["tenant_id"], LLMType.CHAT, llm_name=task["llm_id"], lang=task["language"])
<<<<<<< HEAD
        for d in docs:
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], "question",
                                   {"topn": task["parser_config"]["auto_questions"]})
            if not cached:
                cached = question_proposal(chat_mdl, d["content_with_weight"], task["parser_config"]["auto_questions"])
                if cached:
                    set_llm_cache(chat_mdl.llm_name, d["content_with_weight"], cached, "question",
                                  {"topn": task["parser_config"]["auto_questions"]})

            d["question_kwd"] = cached.split("\n")
            d["question_tks"] = rag_tokenizer.tokenize("\n".join(d["question_kwd"]))
        progress_callback(msg="Question generation completed in {:.2f}s".format(timer() - st))
=======

        async def doc_question_proposal(chat_mdl, d, topn):
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], "question", {"topn": topn})
            if not cached:
                async with chat_limiter:
                    cached = await trio.to_thread.run_sync(lambda: question_proposal(chat_mdl, d["content_with_weight"], topn))
                set_llm_cache(chat_mdl.llm_name, d["content_with_weight"], cached, "question", {"topn": topn})
            if cached:
                d["question_kwd"] = cached.split("\n")
                d["question_tks"] = rag_tokenizer.tokenize("\n".join(d["question_kwd"]))
        async with trio.open_nursery() as nursery:
            for d in docs:
                nursery.start_soon(lambda: doc_question_proposal(chat_mdl, d, task["parser_config"]["auto_questions"]))
        progress_callback(msg="Question generation {} chunks completed in {:.2f}s".format(len(docs), timer() - st))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

    if task["kb_parser_config"].get("tag_kb_ids", []):
        progress_callback(msg="Start to tag for every chunk ...")
        kb_ids = task["kb_parser_config"]["tag_kb_ids"]
        tenant_id = task["tenant_id"]
        topn_tags = task["kb_parser_config"].get("topn_tags", 3)
        S = 1000
        st = timer()
        examples = []
        all_tags = get_tags_from_cache(kb_ids)
        if not all_tags:
            all_tags = settings.retrievaler.all_tags_in_portion(tenant_id, kb_ids, S)
            set_tags_to_cache(kb_ids, all_tags)
        else:
            all_tags = json.loads(all_tags)

        chat_mdl = LLMBundle(task["tenant_id"], LLMType.CHAT, llm_name=task["llm_id"], lang=task["language"])
<<<<<<< HEAD
        for d in docs:
            if settings.retrievaler.tag_content(tenant_id, kb_ids, d, all_tags, topn_tags=topn_tags, S=S):
                examples.append({"content": d["content_with_weight"], TAG_FLD: d[TAG_FLD]})
                continue
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], all_tags, {"topn": topn_tags})
            if not cached:
                cached = content_tagging(chat_mdl, d["content_with_weight"], all_tags,
                                         random.choices(examples, k=2) if len(examples)>2 else examples,
                                         topn=topn_tags)
=======

        docs_to_tag = []
        for d in docs:
            if settings.retrievaler.tag_content(tenant_id, kb_ids, d, all_tags, topn_tags=topn_tags, S=S):
                examples.append({"content": d["content_with_weight"], TAG_FLD: d[TAG_FLD]})
            else:
                docs_to_tag.append(d)

        async def doc_content_tagging(chat_mdl, d, topn_tags):
            cached = get_llm_cache(chat_mdl.llm_name, d["content_with_weight"], all_tags, {"topn": topn_tags})
            if not cached:
                picked_examples = random.choices(examples, k=2) if len(examples)>2 else examples
                async with chat_limiter:
                    cached = await trio.to_thread.run_sync(lambda: content_tagging(chat_mdl, d["content_with_weight"], all_tags, picked_examples, topn=topn_tags))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
                if cached:
                    cached = json.dumps(cached)
            if cached:
                set_llm_cache(chat_mdl.llm_name, d["content_with_weight"], cached, all_tags, {"topn": topn_tags})
                d[TAG_FLD] = json.loads(cached)
<<<<<<< HEAD

        progress_callback(msg="Tagging completed in {:.2f}s".format(timer() - st))
=======
        async with trio.open_nursery() as nursery:
            for d in docs_to_tag:
                nursery.start_soon(lambda: doc_content_tagging(chat_mdl, d, topn_tags))
        progress_callback(msg="Tagging {} chunks completed in {:.2f}s".format(len(docs), timer() - st))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

    return docs


def init_kb(row, vector_size: int):
    idxnm = search.index_name(row["tenant_id"])
    return settings.docStoreConn.createIdx(idxnm, row.get("kb_id", ""), vector_size)


<<<<<<< HEAD
def embedding(docs, mdl, parser_config=None, callback=None):
=======
async def embedding(docs, mdl, parser_config=None, callback=None):
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    if parser_config is None:
        parser_config = {}
    batch_size = 16
    tts, cnts = [], []
    for d in docs:
        tts.append(d.get("docnm_kwd", "Title"))
        c = "\n".join(d.get("question_kwd", []))
        if not c:
            c = d["content_with_weight"]
        c = re.sub(r"</?(table|td|caption|tr|th)( [^<>]{0,12})?>", " ", c)
        if not c:
            c = "None"
        cnts.append(c)

    tk_count = 0
    if len(tts) == len(cnts):
<<<<<<< HEAD
        vts, c = mdl.encode(tts[0: 1])
=======
        vts, c = await trio.to_thread.run_sync(lambda: mdl.encode(tts[0: 1]))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        tts = np.concatenate([vts for _ in range(len(tts))], axis=0)
        tk_count += c

    cnts_ = np.array([])
    for i in range(0, len(cnts), batch_size):
<<<<<<< HEAD
        vts, c = mdl.encode(cnts[i: i + batch_size])
=======
        vts, c = await trio.to_thread.run_sync(lambda: mdl.encode(cnts[i: i + batch_size]))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        if len(cnts_) == 0:
            cnts_ = vts
        else:
            cnts_ = np.concatenate((cnts_, vts), axis=0)
        tk_count += c
        callback(prog=0.7 + 0.2 * (i + 1) / len(cnts), msg="")
    cnts = cnts_

    title_w = float(parser_config.get("filename_embd_weight", 0.1))
    vects = (title_w * tts + (1 - title_w) *
             cnts) if len(tts) == len(cnts) else cnts

    assert len(vects) == len(docs)
    vector_size = 0
    for i, d in enumerate(docs):
        v = vects[i].tolist()
        vector_size = len(v)
        d["q_%d_vec" % len(v)] = v
    return tk_count, vector_size


<<<<<<< HEAD
def run_raptor(row, chat_mdl, embd_mdl, vector_size, callback=None):
=======
async def run_raptor(row, chat_mdl, embd_mdl, vector_size, callback=None):
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    chunks = []
    vctr_nm = "q_%d_vec"%vector_size
    for d in settings.retrievaler.chunk_list(row["doc_id"], row["tenant_id"], [str(row["kb_id"])],
                                             fields=["content_with_weight", vctr_nm]):
        chunks.append((d["content_with_weight"], np.array(d[vctr_nm])))

    raptor = Raptor(
        row["parser_config"]["raptor"].get("max_cluster", 64),
        chat_mdl,
        embd_mdl,
        row["parser_config"]["raptor"]["prompt"],
        row["parser_config"]["raptor"]["max_token"],
        row["parser_config"]["raptor"]["threshold"]
    )
    original_length = len(chunks)
<<<<<<< HEAD
    chunks = raptor(chunks, row["parser_config"]["raptor"]["random_seed"], callback)
=======
    chunks = await raptor(chunks, row["parser_config"]["raptor"]["random_seed"], callback)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    doc = {
        "doc_id": row["doc_id"],
        "kb_id": [str(row["kb_id"])],
        "docnm_kwd": row["name"],
        "title_tks": rag_tokenizer.tokenize(row["name"])
    }
    if row["pagerank"]:
        doc[PAGERANK_FLD] = int(row["pagerank"])
    res = []
    tk_count = 0
    for content, vctr in chunks[original_length:]:
        d = copy.deepcopy(doc)
        d["id"] = xxhash.xxh64((content + str(d["doc_id"])).encode("utf-8")).hexdigest()
        d["create_time"] = str(datetime.now()).replace("T", " ")[:19]
        d["create_timestamp_flt"] = datetime.now().timestamp()
        d[vctr_nm] = vctr.tolist()
        d["content_with_weight"] = content
        d["content_ltks"] = rag_tokenizer.tokenize(content)
        d["content_sm_ltks"] = rag_tokenizer.fine_grained_tokenize(d["content_ltks"])
        res.append(d)
        tk_count += num_tokens_from_string(content)
    return res, tk_count


<<<<<<< HEAD
def run_graphrag(row, chat_model, language, embedding_model, callback=None):
=======
async def run_graphrag(row, chat_model, language, embedding_model, callback=None):
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    chunks = []
    for d in settings.retrievaler.chunk_list(row["doc_id"], row["tenant_id"], [str(row["kb_id"])],
                                             fields=["content_with_weight", "doc_id"]):
        chunks.append((d["doc_id"], d["content_with_weight"]))

<<<<<<< HEAD
    Dealer(LightKGExt if row["parser_config"]["graphrag"]["method"] != 'general' else GeneralKGExt,
=======
    dealer = Dealer(LightKGExt if row["parser_config"]["graphrag"]["method"] != 'general' else GeneralKGExt,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
                    row["tenant_id"],
                    str(row["kb_id"]),
                    chat_model,
                    chunks=chunks,
                    language=language,
                    entity_types=row["parser_config"]["graphrag"]["entity_types"],
                    embed_bdl=embedding_model,
                    callback=callback)
<<<<<<< HEAD


def do_handle_task(task):
=======
    await dealer()


async def do_handle_task(task):
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    task_id = task["id"]
    task_from_page = task["from_page"]
    task_to_page = task["to_page"]
    task_tenant_id = task["tenant_id"]
    task_embedding_id = task["embd_id"]
    task_language = task["language"]
    task_llm_id = task["llm_id"]
    task_dataset_id = task["kb_id"]
    task_doc_id = task["doc_id"]
    task_document_name = task["name"]
    task_parser_config = task["parser_config"]
<<<<<<< HEAD
=======
    task_start_ts = timer()
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

    # prepare the progress callback function
    progress_callback = partial(set_progress, task_id, task_from_page, task_to_page)

    # FIXME: workaround, Infinity doesn't support table parsing method, this check is to notify user
    lower_case_doc_engine = settings.DOC_ENGINE.lower()
    if lower_case_doc_engine == 'infinity' and task['parser_id'].lower() == 'table':
        error_message = "Table parsing method is not supported by Infinity, please use other parsing methods or use Elasticsearch as the document engine."
        progress_callback(-1, msg=error_message)
        raise Exception(error_message)

<<<<<<< HEAD
    try:
        task_canceled = TaskService.do_cancel(task_id)
    except DoesNotExist:
        logging.warning(f"task {task_id} is unknown")
        return
=======
    task_canceled = TaskService.do_cancel(task_id)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    if task_canceled:
        progress_callback(-1, msg="Task has been canceled.")
        return

    try:
        # bind embedding model
        embedding_model = LLMBundle(task_tenant_id, LLMType.EMBEDDING, llm_name=task_embedding_id, lang=task_language)
<<<<<<< HEAD
=======
        vts, _ = embedding_model.encode(["ok"])
        vector_size = len(vts[0])
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    except Exception as e:
        error_message = f'Fail to bind embedding model: {str(e)}'
        progress_callback(-1, msg=error_message)
        logging.exception(error_message)
        raise

<<<<<<< HEAD
    vts, _ = embedding_model.encode(["ok"])
    vector_size = len(vts[0])
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    init_kb(task, vector_size)

    # Either using RAPTOR or Standard chunking methods
    if task.get("task_type", "") == "raptor":
<<<<<<< HEAD
        try:
            # bind LLM for raptor
            chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
            # run RAPTOR
            chunks, token_count = run_raptor(task, chat_model, embedding_model, vector_size, progress_callback)
        except TaskCanceledException:
            raise
        except Exception as e:
            error_message = f'Fail to bind LLM used by RAPTOR: {str(e)}'
            progress_callback(-1, msg=error_message)
            logging.exception(error_message)
            raise
    # Either using graphrag or Standard chunking methods
    elif task.get("task_type", "") == "graphrag":
        start_ts = timer()
        try:
            chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
            run_graphrag(task, chat_model, task_language, embedding_model, progress_callback)
            progress_callback(prog=1.0, msg="Knowledge Graph is done ({:.2f}s)".format(timer() - start_ts))
        except TaskCanceledException:
            raise
        except Exception as e:
            error_message = f'Fail to bind LLM used by Knowledge Graph: {str(e)}'
            progress_callback(-1, msg=error_message)
            logging.exception(error_message)
            raise
        return
    elif task.get("task_type", "") == "graph_resolution":
        start_ts = timer()
        try:
            chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
            WithResolution(
                task["tenant_id"], str(task["kb_id"]),chat_model, embedding_model,
                progress_callback
            )
            progress_callback(prog=1.0, msg="Knowledge Graph resolution is done ({:.2f}s)".format(timer() - start_ts))
        except TaskCanceledException:
            raise
        except Exception as e:
            error_message = f'Fail to bind LLM used by Knowledge Graph resolution: {str(e)}'
            progress_callback(-1, msg=error_message)
            logging.exception(error_message)
            raise
        return
    elif task.get("task_type", "") == "graph_community":
        start_ts = timer()
        try:
            chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
            WithCommunity(
                task["tenant_id"], str(task["kb_id"]), chat_model, embedding_model,
                progress_callback
            )
            progress_callback(prog=1.0, msg="GraphRAG community reports generation is done ({:.2f}s)".format(timer() - start_ts))
        except TaskCanceledException:
            raise
        except Exception as e:
            error_message = f'Fail to bind LLM used by GraphRAG community reports generation: {str(e)}'
            progress_callback(-1, msg=error_message)
            logging.exception(error_message)
            raise
=======
        # bind LLM for raptor
        chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
        # run RAPTOR
        chunks, token_count = await run_raptor(task, chat_model, embedding_model, vector_size, progress_callback)
    # Either using graphrag or Standard chunking methods
    elif task.get("task_type", "") == "graphrag":
        graphrag_conf = task_parser_config.get("graphrag", {})
        if not graphrag_conf.get("use_graphrag", False):
            return
        start_ts = timer()
        chat_model = LLMBundle(task_tenant_id, LLMType.CHAT, llm_name=task_llm_id, lang=task_language)
        await run_graphrag(task, chat_model, task_language, embedding_model, progress_callback)
        progress_callback(prog=1.0, msg="Knowledge Graph basic is done ({:.2f}s)".format(timer() - start_ts))
        if graphrag_conf.get("resolution", False):
            start_ts = timer()
            with_res = WithResolution(
                task["tenant_id"], str(task["kb_id"]), chat_model, embedding_model,
                progress_callback
            )
            await with_res()
            progress_callback(prog=1.0, msg="Knowledge Graph resolution is done ({:.2f}s)".format(timer() - start_ts))
        if graphrag_conf.get("community", False):
            start_ts = timer()
            with_comm = WithCommunity(
                task["tenant_id"], str(task["kb_id"]), chat_model, embedding_model,
                progress_callback
            )
            await with_comm()
            progress_callback(prog=1.0, msg="Knowledge Graph community is done ({:.2f}s)".format(timer() - start_ts))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        return
    else:
        # Standard chunking methods
        start_ts = timer()
<<<<<<< HEAD
        chunks = build_chunks(task, progress_callback)
=======
        chunks = await build_chunks(task, progress_callback)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        logging.info("Build document {}: {:.2f}s".format(task_document_name, timer() - start_ts))
        if chunks is None:
            return
        if not chunks:
            progress_callback(1., msg=f"No chunk built from {task_document_name}")
            return
        # TODO: exception handler
        ## set_progress(task["did"], -1, "ERROR: ")
        progress_callback(msg="Generate {} chunks".format(len(chunks)))
        start_ts = timer()
        try:
<<<<<<< HEAD
            token_count, vector_size = embedding(chunks, embedding_model, task_parser_config, progress_callback)
=======
            token_count, vector_size = await embedding(chunks, embedding_model, task_parser_config, progress_callback)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        except Exception as e:
            error_message = "Generate embedding error:{}".format(str(e))
            progress_callback(-1, error_message)
            logging.exception(error_message)
            token_count = 0
            raise
        progress_message = "Embedding chunks ({:.2f}s)".format(timer() - start_ts)
        logging.info(progress_message)
        progress_callback(msg=progress_message)

    chunk_count = len(set([chunk["id"] for chunk in chunks]))
    start_ts = timer()
    doc_store_result = ""
    es_bulk_size = 4
    for b in range(0, len(chunks), es_bulk_size):
<<<<<<< HEAD
        doc_store_result = settings.docStoreConn.insert(chunks[b:b + es_bulk_size], search.index_name(task_tenant_id),
                                                        task_dataset_id)
=======
        doc_store_result = await trio.to_thread.run_sync(lambda: settings.docStoreConn.insert(chunks[b:b + es_bulk_size], search.index_name(task_tenant_id), task_dataset_id))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        if b % 128 == 0:
            progress_callback(prog=0.8 + 0.1 * (b + 1) / len(chunks), msg="")
        if doc_store_result:
            error_message = f"Insert chunk error: {doc_store_result}, please check log file and Elasticsearch/Infinity status!"
            progress_callback(-1, msg=error_message)
            raise Exception(error_message)
        chunk_ids = [chunk["id"] for chunk in chunks[:b + es_bulk_size]]
        chunk_ids_str = " ".join(chunk_ids)
        try:
            TaskService.update_chunk_ids(task["id"], chunk_ids_str)
        except DoesNotExist:
            logging.warning(f"do_handle_task update_chunk_ids failed since task {task['id']} is unknown.")
<<<<<<< HEAD
            doc_store_result = settings.docStoreConn.delete({"id": chunk_ids}, search.index_name(task_tenant_id),
                                                            task_dataset_id)
=======
            doc_store_result = await trio.to_thread.run_sync(lambda: settings.docStoreConn.delete({"id": chunk_ids}, search.index_name(task_tenant_id), task_dataset_id))
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
            return
    logging.info("Indexing doc({}), page({}-{}), chunks({}), elapsed: {:.2f}".format(task_document_name, task_from_page,
                                                                                     task_to_page, len(chunks),
                                                                                     timer() - start_ts))

    DocumentService.increment_chunk_num(task_doc_id, task_dataset_id, token_count, chunk_count, 0)

    time_cost = timer() - start_ts
<<<<<<< HEAD
    progress_callback(prog=1.0, msg="Done ({:.2f}s)".format(time_cost))
    logging.info(
        "Chunk doc({}), page({}-{}), chunks({}), token({}), elapsed:{:.2f}".format(task_document_name, task_from_page,
                                                                                   task_to_page, len(chunks),
                                                                                   token_count, time_cost))


def handle_task():
    global PAYLOAD, mt_lock, DONE_TASKS, FAILED_TASKS, CURRENT_TASK
    task = collect()
    if task:
        try:
            logging.info(f"handle_task begin for task {json.dumps(task)}")
            with mt_lock:
                CURRENT_TASK = copy.deepcopy(task)
            do_handle_task(task)
            with mt_lock:
                DONE_TASKS += 1
                CURRENT_TASK = None
            logging.info(f"handle_task done for task {json.dumps(task)}")
        except TaskCanceledException:
            with mt_lock:
                DONE_TASKS += 1
                CURRENT_TASK = None
            try:
                set_progress(task["id"], prog=-1, msg="handle_task got TaskCanceledException")
            except Exception:
                pass
            logging.debug("handle_task got TaskCanceledException", exc_info=True)
        except Exception as e:
            with mt_lock:
                FAILED_TASKS += 1
                CURRENT_TASK = None
            try:
                set_progress(task["id"], prog=-1, msg=f"[Exception]: {e}")
            except Exception:
                pass
            logging.exception(f"handle_task got exception for task {json.dumps(task)}")
    if PAYLOAD:
        PAYLOAD.ack()
        PAYLOAD = None


def report_status():
    global CONSUMER_NAME, BOOT_AT, PENDING_TASKS, LAG_TASKS, mt_lock, DONE_TASKS, FAILED_TASKS, CURRENT_TASK
=======
    task_time_cost = timer() - task_start_ts
    progress_callback(prog=1.0, msg="Indexing done ({:.2f}s). Task done ({:.2f}s)".format(time_cost, task_time_cost))
    logging.info(
        "Chunk doc({}), page({}-{}), chunks({}), token({}), elapsed:{:.2f}".format(task_document_name, task_from_page,
                                                                                   task_to_page, len(chunks),
                                                                                   token_count, task_time_cost))


async def handle_task():
    global DONE_TASKS, FAILED_TASKS
    redis_msg, task = await collect()
    if not task:
        return
    try:
        logging.info(f"handle_task begin for task {json.dumps(task)}")
        CURRENT_TASKS[task["id"]] = copy.deepcopy(task)
        await do_handle_task(task)
        DONE_TASKS += 1
        CURRENT_TASKS.pop(task["id"], None)
        logging.info(f"handle_task done for task {json.dumps(task)}")
    except Exception as e:
        FAILED_TASKS += 1
        CURRENT_TASKS.pop(task["id"], None)
        try:
            set_progress(task["id"], prog=-1, msg=f"[Exception]: {e}")
        except Exception:
            pass
        logging.exception(f"handle_task got exception for task {json.dumps(task)}")
    redis_msg.ack()


async def report_status():
    global CONSUMER_NAME, BOOT_AT, PENDING_TASKS, LAG_TASKS, DONE_TASKS, FAILED_TASKS
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    REDIS_CONN.sadd("TASKEXE", CONSUMER_NAME)
    while True:
        try:
            now = datetime.now()
            group_info = REDIS_CONN.queue_info(SVR_QUEUE_NAME, "rag_flow_svr_task_broker")
            if group_info is not None:
                PENDING_TASKS = int(group_info.get("pending", 0))
                LAG_TASKS = int(group_info.get("lag", 0))

<<<<<<< HEAD
            with mt_lock:
                heartbeat = json.dumps({
                    "name": CONSUMER_NAME,
                    "now": now.astimezone().isoformat(timespec="milliseconds"),
                    "boot_at": BOOT_AT,
                    "pending": PENDING_TASKS,
                    "lag": LAG_TASKS,
                    "done": DONE_TASKS,
                    "failed": FAILED_TASKS,
                    "current": CURRENT_TASK,
                })
=======
            current = copy.deepcopy(CURRENT_TASKS)
            heartbeat = json.dumps({
                "name": CONSUMER_NAME,
                "now": now.astimezone().isoformat(timespec="milliseconds"),
                "boot_at": BOOT_AT,
                "pending": PENDING_TASKS,
                "lag": LAG_TASKS,
                "done": DONE_TASKS,
                "failed": FAILED_TASKS,
                "current": current,
            })
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
            REDIS_CONN.zadd(CONSUMER_NAME, heartbeat, now.timestamp())
            logging.info(f"{CONSUMER_NAME} reported heartbeat: {heartbeat}")

            expired = REDIS_CONN.zcount(CONSUMER_NAME, 0, now.timestamp() - 60 * 30)
            if expired > 0:
                REDIS_CONN.zpopmin(CONSUMER_NAME, expired)
        except Exception:
            logging.exception("report_status got exception")
<<<<<<< HEAD
        time.sleep(30)


def analyze_heap(snapshot1: tracemalloc.Snapshot, snapshot2: tracemalloc.Snapshot, snapshot_id: int, dump_full: bool):
    msg = ""
    if dump_full:
        stats2 = snapshot2.statistics('lineno')
        msg += f"{CONSUMER_NAME} memory usage of snapshot {snapshot_id}:\n"
        for stat in stats2[:10]:
            msg += f"{stat}\n"
    stats1_vs_2 = snapshot2.compare_to(snapshot1, 'lineno')
    msg += f"{CONSUMER_NAME} memory usage increase from snapshot {snapshot_id - 1} to snapshot {snapshot_id}:\n"
    for stat in stats1_vs_2[:10]:
        msg += f"{stat}\n"
    msg += f"{CONSUMER_NAME} detailed traceback for the top memory consumers:\n"
    for stat in stats1_vs_2[:3]:
        msg += '\n'.join(stat.traceback.format())
    logging.info(msg)


def main():
=======
        await trio.sleep(30)


async def main():
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    logging.info(r"""
  ______           __      ______                     __            
 /_  __/___ ______/ /__   / ____/  _____  _______  __/ /_____  _____
  / / / __ `/ ___/ //_/  / __/ | |/_/ _ \/ ___/ / / / __/ __ \/ ___/
 / / / /_/ (__  ) ,<    / /____>  </  __/ /__/ /_/ / /_/ /_/ / /    
/_/  \__,_/____/_/|_|  /_____/_/|_|\___/\___/\__,_/\__/\____/_/                               
    """)
    logging.info(f'TaskExecutor: RAGFlow version: {get_ragflow_version()}')
    settings.init_settings()
    print_rag_settings()
<<<<<<< HEAD
    background_thread = threading.Thread(target=report_status)
    background_thread.daemon = True
    background_thread.start()

    TRACE_MALLOC_DELTA = int(os.environ.get('TRACE_MALLOC_DELTA', "0"))
    TRACE_MALLOC_FULL = int(os.environ.get('TRACE_MALLOC_FULL', "0"))
    if TRACE_MALLOC_DELTA > 0:
        if TRACE_MALLOC_FULL < TRACE_MALLOC_DELTA:
            TRACE_MALLOC_FULL = TRACE_MALLOC_DELTA
        tracemalloc.start()
        snapshot1 = tracemalloc.take_snapshot()
    while True:
        handle_task()
        num_tasks = DONE_TASKS + FAILED_TASKS
        if TRACE_MALLOC_DELTA > 0 and num_tasks > 0 and num_tasks % TRACE_MALLOC_DELTA == 0:
            snapshot2 = tracemalloc.take_snapshot()
            analyze_heap(snapshot1, snapshot2, int(num_tasks / TRACE_MALLOC_DELTA), num_tasks % TRACE_MALLOC_FULL == 0)
            snapshot1 = snapshot2
            snapshot2 = None


if __name__ == "__main__":
    main()
=======
    signal.signal(signal.SIGUSR1, start_tracemalloc_and_snapshot)
    signal.signal(signal.SIGUSR2, stop_tracemalloc)
    TRACE_MALLOC_ENABLED = int(os.environ.get('TRACE_MALLOC_ENABLED', "0"))
    if TRACE_MALLOC_ENABLED:
        start_tracemalloc_and_snapshot(None, None)

    async with trio.open_nursery() as nursery:
        nursery.start_soon(report_status)
        while True:
            async with task_limiter:
                nursery.start_soon(handle_task)
    logging.error("BUG!!! You should not reach here!!!")

if __name__ == "__main__":
    trio.run(main)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
