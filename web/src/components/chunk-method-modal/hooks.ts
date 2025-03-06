<<<<<<< HEAD
=======
import { DocumentParserType } from '@/constants/knowledge';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { useHandleChunkMethodSelectChange } from '@/hooks/logic-hooks';
import { useSelectParserList } from '@/hooks/user-setting-hooks';
import { FormInstance } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';

const ParserListMap = new Map([
  [
    ['pdf'],
    [
<<<<<<< HEAD
      'naive',
      'resume',
      'manual',
      'paper',
      'book',
      'laws',
      'presentation',
      'one',
      'qa',
      'knowledge_graph',
=======
      DocumentParserType.Naive,
      DocumentParserType.Resume,
      DocumentParserType.Manual,
      DocumentParserType.Paper,
      DocumentParserType.Book,
      DocumentParserType.Laws,
      DocumentParserType.Presentation,
      DocumentParserType.One,
      DocumentParserType.Qa,
      DocumentParserType.KnowledgeGraph,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    ],
  ],
  [
    ['doc', 'docx'],
    [
<<<<<<< HEAD
      'naive',
      'resume',
      'book',
      'laws',
      'one',
      'qa',
      'manual',
      'knowledge_graph',
=======
      DocumentParserType.Naive,
      DocumentParserType.Resume,
      DocumentParserType.Book,
      DocumentParserType.Laws,
      DocumentParserType.One,
      DocumentParserType.Qa,
      DocumentParserType.Manual,
      DocumentParserType.KnowledgeGraph,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    ],
  ],
  [
    ['xlsx', 'xls'],
<<<<<<< HEAD
    ['naive', 'qa', 'table', 'one', 'knowledge_graph'],
  ],
  [['ppt', 'pptx'], ['presentation']],
  [
    ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tif', 'tiff', 'webp', 'svg', 'ico'],
    ['picture'],
=======
    [
      DocumentParserType.Naive,
      DocumentParserType.Qa,
      DocumentParserType.Table,
      DocumentParserType.One,
      DocumentParserType.KnowledgeGraph,
    ],
  ],
  [['ppt', 'pptx'], [DocumentParserType.Presentation]],
  [
    ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tif', 'tiff', 'webp', 'svg', 'ico'],
    [DocumentParserType.Picture],
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  ],
  [
    ['txt'],
    [
<<<<<<< HEAD
      'naive',
      'resume',
      'book',
      'laws',
      'one',
      'qa',
      'table',
      'knowledge_graph',
=======
      DocumentParserType.Naive,
      DocumentParserType.Resume,
      DocumentParserType.Book,
      DocumentParserType.Laws,
      DocumentParserType.One,
      DocumentParserType.Qa,
      DocumentParserType.Table,
      DocumentParserType.KnowledgeGraph,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    ],
  ],
  [
    ['csv'],
    [
<<<<<<< HEAD
      'naive',
      'resume',
      'book',
      'laws',
      'one',
      'qa',
      'table',
      'knowledge_graph',
    ],
  ],
  [['md'], ['naive', 'qa', 'knowledge_graph']],
  [['json'], ['naive', 'knowledge_graph']],
  [['eml'], ['email']],
=======
      DocumentParserType.Naive,
      DocumentParserType.Resume,
      DocumentParserType.Book,
      DocumentParserType.Laws,
      DocumentParserType.One,
      DocumentParserType.Qa,
      DocumentParserType.Table,
      DocumentParserType.KnowledgeGraph,
    ],
  ],
  [
    ['md'],
    [
      DocumentParserType.Naive,
      DocumentParserType.Qa,
      DocumentParserType.KnowledgeGraph,
    ],
  ],
  [['json'], [DocumentParserType.Naive, DocumentParserType.KnowledgeGraph]],
  [['eml'], [DocumentParserType.Email]],
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
]);

const getParserList = (
  values: string[],
  parserList: Array<{
    value: string;
    label: string;
  }>,
) => {
  return parserList.filter((x) => values?.some((y) => y === x.value));
};

export const useFetchParserListOnMount = (
  documentId: string,
<<<<<<< HEAD
  parserId: string,
  documentExtension: string,
  form: FormInstance,
) => {
  const [selectedTag, setSelectedTag] = useState('');
=======
  parserId: DocumentParserType,
  documentExtension: string,
  form: FormInstance,
) => {
  const [selectedTag, setSelectedTag] = useState<DocumentParserType>();
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  const parserList = useSelectParserList();
  const handleChunkMethodSelectChange = useHandleChunkMethodSelectChange(form);

  const nextParserList = useMemo(() => {
    const key = [...ParserListMap.keys()].find((x) =>
      x.some((y) => y === documentExtension),
    );
    if (key) {
      const values = ParserListMap.get(key);
      return getParserList(values ?? [], parserList);
    }

    return getParserList(
<<<<<<< HEAD
      ['naive', 'resume', 'book', 'laws', 'one', 'qa', 'table'],
=======
      [
        DocumentParserType.Naive,
        DocumentParserType.Resume,
        DocumentParserType.Book,
        DocumentParserType.Laws,
        DocumentParserType.One,
        DocumentParserType.Qa,
        DocumentParserType.Table,
      ],
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      parserList,
    );
  }, [parserList, documentExtension]);

  useEffect(() => {
    setSelectedTag(parserId);
  }, [parserId, documentId]);

  const handleChange = (tag: string) => {
    handleChunkMethodSelectChange(tag);
<<<<<<< HEAD
    setSelectedTag(tag);
=======
    setSelectedTag(tag as DocumentParserType);
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  };

  return { parserList: nextParserList, handleChange, selectedTag };
};

<<<<<<< HEAD
const hideAutoKeywords = ['qa', 'table', 'resume', 'knowledge_graph', 'tag'];

export const useShowAutoKeywords = () => {
  const showAutoKeywords = useCallback((selectedTag: string) => {
    return hideAutoKeywords.every((x) => selectedTag !== x);
  }, []);
=======
const hideAutoKeywords = [
  DocumentParserType.Qa,
  DocumentParserType.Table,
  DocumentParserType.Resume,
  DocumentParserType.KnowledgeGraph,
  DocumentParserType.Tag,
];

export const useShowAutoKeywords = () => {
  const showAutoKeywords = useCallback(
    (selectedTag: DocumentParserType | undefined) => {
      return hideAutoKeywords.every((x) => selectedTag !== x);
    },
    [],
  );
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  return showAutoKeywords;
};
