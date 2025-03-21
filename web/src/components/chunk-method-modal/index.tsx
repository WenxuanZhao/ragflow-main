import MaxTokenNumber from '@/components/max-token-number';
import { IModalManagerChildrenProps } from '@/components/modal-manager';
import {
  MinusCircleOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  InputNumber,
  Modal,
  Select,
  Space,
  Tooltip,
} from 'antd';
import omit from 'lodash/omit';
import React, { useEffect, useMemo } from 'react';
import { useFetchParserListOnMount, useShowAutoKeywords } from './hooks';

<<<<<<< HEAD
=======
import { DocumentParserType } from '@/constants/knowledge';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { useTranslate } from '@/hooks/common-hooks';
import { IParserConfig } from '@/interfaces/database/document';
import { IChangeParserConfigRequestBody } from '@/interfaces/request/document';
import { AutoKeywordsItem, AutoQuestionsItem } from '../auto-keywords-item';
<<<<<<< HEAD
=======
import { DatasetConfigurationContainer } from '../dataset-configuration-container';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import Delimiter from '../delimiter';
import EntityTypesItem from '../entity-types-item';
import ExcelToHtml from '../excel-to-html';
import LayoutRecognize from '../layout-recognize';
import ParseConfiguration, {
  showRaptorParseConfiguration,
} from '../parse-configuration';
import GraphRagItems, {
  showGraphRagItems,
} from '../parse-configuration/graph-rag-items';
import styles from './index.less';

interface IProps extends Omit<IModalManagerChildrenProps, 'showModal'> {
  loading: boolean;
  onOk: (
<<<<<<< HEAD
    parserId: string,
    parserConfig: IChangeParserConfigRequestBody,
  ) => void;
  showModal?(): void;
  parserId: string;
=======
    parserId: DocumentParserType | undefined,
    parserConfig: IChangeParserConfigRequestBody,
  ) => void;
  showModal?(): void;
  parserId: DocumentParserType;
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  parserConfig: IParserConfig;
  documentExtension: string;
  documentId: string;
}

const hidePagesChunkMethods = [
<<<<<<< HEAD
  'qa',
  'table',
  'picture',
  'resume',
  'one',
  'knowledge_graph',
=======
  DocumentParserType.Qa,
  DocumentParserType.Table,
  DocumentParserType.Picture,
  DocumentParserType.Resume,
  DocumentParserType.One,
  DocumentParserType.KnowledgeGraph,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
];

const ChunkMethodModal: React.FC<IProps> = ({
  documentId,
  parserId,
  onOk,
  hideModal,
  visible,
  documentExtension,
  parserConfig,
  loading,
}) => {
  const [form] = Form.useForm();
  const { parserList, handleChange, selectedTag } = useFetchParserListOnMount(
    documentId,
    parserId,
    documentExtension,
    form,
  );
  const { t } = useTranslate('knowledgeDetails');

  const handleOk = async () => {
    const values = await form.validateFields();
    const parser_config = {
      ...values.parser_config,
      pages: values.pages?.map((x: any) => [x.from, x.to]) ?? [],
    };
    onOk(selectedTag, parser_config);
  };

  const isPdf = documentExtension === 'pdf';

  const showPages = useMemo(() => {
    return isPdf && hidePagesChunkMethods.every((x) => x !== selectedTag);
  }, [selectedTag, isPdf]);

  const showOne = useMemo(() => {
    return (
      isPdf &&
      hidePagesChunkMethods
<<<<<<< HEAD
        .filter((x) => x !== 'one')
=======
        .filter((x) => x !== DocumentParserType.One)
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        .every((x) => x !== selectedTag)
    );
  }, [selectedTag, isPdf]);

  const showMaxTokenNumber =
<<<<<<< HEAD
    selectedTag === 'naive' || selectedTag === 'knowledge_graph';

  const hideDivider = [showPages, showOne, showMaxTokenNumber].every(
    (x) => x === false,
  );

  const showEntityTypes = selectedTag === 'knowledge_graph';

  const showExcelToHtml =
    selectedTag === 'naive' && documentExtension === 'xlsx';
=======
    selectedTag === DocumentParserType.Naive ||
    selectedTag === DocumentParserType.KnowledgeGraph;

  const showEntityTypes = selectedTag === DocumentParserType.KnowledgeGraph;

  const showExcelToHtml =
    selectedTag === DocumentParserType.Naive && documentExtension === 'xlsx';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  const showAutoKeywords = useShowAutoKeywords();

  const afterClose = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (visible) {
      const pages =
        parserConfig?.pages?.map((x) => ({ from: x[0], to: x[1] })) ?? [];
      form.setFieldsValue({
        pages: pages.length > 0 ? pages : [{ from: 1, to: 1024 }],
        parser_config: omit(parserConfig, 'pages'),
      });
    }
  }, [form, parserConfig, visible]);

  return (
    <Modal
      title={t('chunkMethod')}
      open={visible}
      onOk={handleOk}
      onCancel={hideModal}
      afterClose={afterClose}
      confirmLoading={loading}
      width={700}
    >
      <Space size={[0, 8]} wrap>
        <Form.Item label={t('chunkMethod')} className={styles.chunkMethod}>
          <Select
            style={{ width: 160 }}
            onChange={handleChange}
            value={selectedTag}
            options={parserList}
          />
        </Form.Item>
      </Space>
<<<<<<< HEAD
      {hideDivider || <Divider></Divider>}
      <Form name="dynamic_form_nest_item" autoComplete="off" form={form}>
=======
      <Divider></Divider>
      <Form
        name="dynamic_form_nest_item"
        autoComplete="off"
        form={form}
        className="space-y-4"
      >
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        {showPages && (
          <>
            <Space>
              <p>{t('pageRanges')}:</p>
              <Tooltip title={t('pageRangesTip')}>
                <QuestionCircleOutlined
                  className={styles.questionIcon}
                ></QuestionCircleOutlined>
              </Tooltip>
            </Space>
            <Form.List name="pages">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, 'from']}
                        dependencies={name > 0 ? [name - 1, 'to'] : []}
                        rules={[
                          {
                            required: true,
                            message: t('fromMessage'),
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                name === 0 ||
                                !value ||
                                getFieldValue(['pages', name - 1, 'to']) < value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(t('greaterThanPrevious')),
                              );
                            },
                          }),
                        ]}
                      >
                        <InputNumber
                          placeholder={t('fromPlaceholder')}
                          min={0}
                          precision={0}
                          className={styles.pageInputNumber}
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'to']}
                        dependencies={[name, 'from']}
                        rules={[
                          {
                            required: true,
                            message: t('toMessage'),
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue(['pages', name, 'from']) < value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(t('greaterThan')),
                              );
                            },
                          }),
                        ]}
                      >
                        <InputNumber
                          placeholder={t('toPlaceholder')}
                          min={0}
                          precision={0}
                          className={styles.pageInputNumber}
                        />
                      </Form.Item>
                      {name > 0 && (
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      )}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      {t('addPage')}
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </>
        )}
<<<<<<< HEAD
        {showOne && <LayoutRecognize></LayoutRecognize>}
=======

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        {showPages && (
          <Form.Item
            noStyle
            dependencies={[['parser_config', 'layout_recognize']]}
          >
            {({ getFieldValue }) =>
              getFieldValue(['parser_config', 'layout_recognize']) && (
                <Form.Item
                  name={['parser_config', 'task_page_size']}
                  label={t('taskPageSize')}
                  tooltip={t('taskPageSizeTip')}
                  initialValue={12}
                  rules={[
                    {
                      required: true,
                      message: t('taskPageSizeMessage'),
                    },
                  ]}
                >
                  <InputNumber min={1} max={128} />
                </Form.Item>
              )
            }
          </Form.Item>
        )}
<<<<<<< HEAD
        {showMaxTokenNumber && (
          <>
            <MaxTokenNumber
              max={selectedTag === 'knowledge_graph' ? 8192 * 2 : 2048}
            ></MaxTokenNumber>
            <Delimiter></Delimiter>
          </>
        )}
        {showAutoKeywords(selectedTag) && (
          <>
            <AutoKeywordsItem></AutoKeywordsItem>
            <AutoQuestionsItem></AutoQuestionsItem>
          </>
        )}
        {showExcelToHtml && <ExcelToHtml></ExcelToHtml>}
        {showRaptorParseConfiguration(selectedTag) && (
          <ParseConfiguration></ParseConfiguration>
=======
        <DatasetConfigurationContainer show={showOne || showMaxTokenNumber}>
          {showOne && <LayoutRecognize></LayoutRecognize>}
          {showMaxTokenNumber && (
            <>
              <MaxTokenNumber
                max={
                  selectedTag === DocumentParserType.KnowledgeGraph
                    ? 8192 * 2
                    : 2048
                }
              ></MaxTokenNumber>
              <Delimiter></Delimiter>
            </>
          )}
        </DatasetConfigurationContainer>
        <DatasetConfigurationContainer
          show={showAutoKeywords(selectedTag) || showExcelToHtml}
        >
          {showAutoKeywords(selectedTag) && (
            <>
              <AutoKeywordsItem></AutoKeywordsItem>
              <AutoQuestionsItem></AutoQuestionsItem>
            </>
          )}
          {showExcelToHtml && <ExcelToHtml></ExcelToHtml>}
        </DatasetConfigurationContainer>
        {showRaptorParseConfiguration(selectedTag) && (
          <DatasetConfigurationContainer>
            <ParseConfiguration></ParseConfiguration>
          </DatasetConfigurationContainer>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        )}
        {showGraphRagItems(selectedTag) && <GraphRagItems></GraphRagItems>}
        {showEntityTypes && <EntityTypesItem></EntityTypesItem>}
      </Form>
    </Modal>
  );
};
export default ChunkMethodModal;
