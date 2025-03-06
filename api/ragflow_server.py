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
#

# from beartype import BeartypeConf
# from beartype.claw import beartype_all  # <-- you didn't sign up for this
# beartype_all(conf=BeartypeConf(violation_type=UserWarning))    # <-- emit warnings from all code

from api.utils.log_utils import initRootLogger
initRootLogger("ragflow_server")

import logging
import os
import signal
import sys
import time
import traceback
from concurrent.futures import ThreadPoolExecutor
<<<<<<< HEAD
=======
import threading
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

from werkzeug.serving import run_simple
from api import settings
from api.apps import app
from api.db.runtime_config import RuntimeConfig
from api.db.services.document_service import DocumentService
from api import utils

from api.db.db_models import init_database_tables as init_web_db
from api.db.init_data import init_web_data
from api.versions import get_ragflow_version
from api.utils import show_configs
from rag.settings import print_rag_settings

<<<<<<< HEAD

def update_progress():
    while True:
        time.sleep(6)
        try:
            DocumentService.update_progress()
        except Exception:
            logging.exception("update_progress exception")

=======
stop_event = threading.Event()

def update_progress():
    while not stop_event.is_set():
        try:
            DocumentService.update_progress()
            stop_event.wait(6)
        except Exception:
            logging.exception("update_progress exception")

def signal_handler(sig, frame):
    logging.info("Received interrupt signal, shutting down...")
    stop_event.set()
    time.sleep(1)
    sys.exit(0)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

if __name__ == '__main__':
    logging.info(r"""
        ____   ___    ______ ______ __               
       / __ \ /   |  / ____// ____// /____  _      __
      / /_/ // /| | / / __ / /_   / // __ \| | /| / /
     / _, _// ___ |/ /_/ // __/  / // /_/ /| |/ |/ / 
    /_/ |_|/_/  |_|\____//_/    /_/ \____/ |__/|__/                             

    """)
    logging.info(
        f'RAGFlow version: {get_ragflow_version()}'
    )
    logging.info(
        f'project base: {utils.file_utils.get_project_base_directory()}'
    )
    show_configs()
    settings.init_settings()
    print_rag_settings()

    # init db
    init_web_db()
    init_web_data()
    # init runtime config
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--version", default=False, help="RAGFlow version", action="store_true"
    )
    parser.add_argument(
        "--debug", default=False, help="debug mode", action="store_true"
    )
    args = parser.parse_args()
    if args.version:
        print(get_ragflow_version())
        sys.exit(0)

    RuntimeConfig.DEBUG = args.debug
    if RuntimeConfig.DEBUG:
        logging.info("run on debug mode")

    RuntimeConfig.init_env()
    RuntimeConfig.init_config(JOB_SERVER_HOST=settings.HOST_IP, HTTP_PORT=settings.HOST_PORT)

<<<<<<< HEAD
=======
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    thread = ThreadPoolExecutor(max_workers=1)
    thread.submit(update_progress)

    # start http server
    try:
        logging.info("RAGFlow HTTP server start...")
        run_simple(
            hostname=settings.HOST_IP,
            port=settings.HOST_PORT,
            application=app,
            threaded=True,
            use_reloader=RuntimeConfig.DEBUG,
            use_debugger=RuntimeConfig.DEBUG,
        )
    except Exception:
        traceback.print_exc()
<<<<<<< HEAD
=======
        stop_event.set()
        time.sleep(1)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        os.kill(os.getpid(), signal.SIGKILL)
