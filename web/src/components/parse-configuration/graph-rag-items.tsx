<<<<<<< HEAD
import { useTranslate } from '@/hooks/common-hooks';
import { Divider, Form, Select, Switch } from 'antd';
import { upperFirst } from 'lodash';
import { useCallback, useMemo } from 'react';
import EntityTypesItem from '../entity-types-item';

const excludedTagParseMethods = ['table', 'knowledge_graph', 'tag'];

export const showTagItems = (parserId: string) => {
=======
import { DocumentParserType } from '@/constants/knowledge';
import { useTranslate } from '@/hooks/common-hooks';
import { cn } from '@/lib/utils';
import { Form, Select, Switch } from 'antd';
import { upperFirst } from 'lodash';
import { useCallback, useMemo } from 'react';
import { DatasetConfigurationContainer } from '../dataset-configuration-container';
import EntityTypesItem from '../entity-types-item';

const excludedTagParseMethods = [
  DocumentParserType.Table,
  DocumentParserType.KnowledgeGraph,
  DocumentParserType.Tag,
];

export const showTagItems = (parserId: DocumentParserType) => {
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  return !excludedTagParseMethods.includes(parserId);
};

const enum MethodValue {
  General = 'general',
  Light = 'light',
}

export const excludedParseMethods = [
<<<<<<< HEAD
  'table',
  'resume',
  'picture',
  'knowledge_graph',
  'qa',
  'tag',
];

export const showGraphRagItems = (parserId: string) => {
  return !excludedParseMethods.includes(parserId);
};

// The three types "table", "resume" and "one" do not display this configuration.
const GraphRagItems = () => {
=======
  DocumentParserType.Table,
  DocumentParserType.Resume,
  DocumentParserType.Picture,
  DocumentParserType.KnowledgeGraph,
  DocumentParserType.Qa,
  DocumentParserType.Tag,
];

export const showGraphRagItems = (parserId: DocumentParserType | undefined) => {
  return !excludedParseMethods.some((x) => x === parserId);
};

type GraphRagItemsProps = {
  marginBottom?: boolean;
};

// The three types "table", "resume" and "one" do not display this configuration.
const GraphRagItems = ({ marginBottom = false }: GraphRagItemsProps) => {
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  const { t } = useTranslate('knowledgeConfiguration');

  const methodOptions = useMemo(() => {
    return [MethodValue.Light, MethodValue.General].map((x) => ({
      value: x,
      label: upperFirst(x),
    }));
  }, []);

  const renderWideTooltip = useCallback(
    (title: React.ReactNode | string) => {
      return {
        title: typeof title === 'string' ? t(title) : title,
<<<<<<< HEAD
        overlayInnerStyle: { width: '50vw' },
=======
        overlayInnerStyle: { width: '32vw' },
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      };
    },
    [t],
  );

  return (
<<<<<<< HEAD
    <>
      <Divider></Divider>
=======
    <DatasetConfigurationContainer className={cn({ 'mb-4': marginBottom })}>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      <Form.Item
        name={['parser_config', 'graphrag', 'use_graphrag']}
        label={t('useGraphRag')}
        initialValue={false}
        valuePropName="checked"
<<<<<<< HEAD
        tooltip={renderWideTooltip('useGraphRagTip')}
=======
        tooltip={t('useGraphRagTip')}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      >
        <Switch />
      </Form.Item>
      <Form.Item
        shouldUpdate={(prevValues, curValues) =>
          prevValues.parser_config.graphrag.use_graphrag !==
          curValues.parser_config.graphrag.use_graphrag
        }
      >
        {({ getFieldValue }) => {
          const useRaptor = getFieldValue([
            'parser_config',
            'graphrag',
            'use_graphrag',
          ]);

          return (
            useRaptor && (
              <>
                <EntityTypesItem
                  field={['parser_config', 'graphrag', 'entity_types']}
                ></EntityTypesItem>
                <Form.Item
                  name={['parser_config', 'graphrag', 'method']}
                  label={t('graphRagMethod')}
                  tooltip={renderWideTooltip(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t('graphRagMethodTip'),
                      }}
                    ></div>,
                  )}
                  initialValue={MethodValue.Light}
                >
                  <Select options={methodOptions} />
                </Form.Item>
                <Form.Item
                  name={['parser_config', 'graphrag', 'resolution']}
                  label={t('resolution')}
                  tooltip={renderWideTooltip('resolutionTip')}
                >
                  <Switch />
                </Form.Item>
                <Form.Item
                  name={['parser_config', 'graphrag', 'community']}
                  label={t('community')}
                  tooltip={renderWideTooltip('communityTip')}
                >
                  <Switch />
                </Form.Item>
              </>
            )
          );
        }}
      </Form.Item>
<<<<<<< HEAD
    </>
=======
    </DatasetConfigurationContainer>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  );
};

export default GraphRagItems;
