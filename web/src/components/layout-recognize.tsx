import { LlmModelType } from '@/constants/knowledge';
import { useTranslate } from '@/hooks/common-hooks';
import { useSelectLlmOptionsByModelType } from '@/hooks/llm-hooks';
import { Form, Select } from 'antd';
<<<<<<< HEAD
=======
import { camelCase } from 'lodash';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import { useMemo } from 'react';

const enum DocumentType {
  DeepDOC = 'DeepDOC',
  PlainText = 'Plain Text',
}

const LayoutRecognize = () => {
  const { t } = useTranslate('knowledgeDetails');
  const allOptions = useSelectLlmOptionsByModelType();

  const options = useMemo(() => {
    const list = [DocumentType.DeepDOC, DocumentType.PlainText].map((x) => ({
<<<<<<< HEAD
      label: x,
      value: x,
    }));

    return [...list, ...allOptions[LlmModelType.Image2text]];
  }, [allOptions]);
=======
      label: x === DocumentType.PlainText ? t(camelCase(x)) : 'DeepDoc',
      value: x,
    }));

    const image2TextList = allOptions[LlmModelType.Image2text].map((x) => {
      return {
        ...x,
        options: x.options.map((y) => {
          return {
            ...y,
            label: (
              <div className="flex justify-between items-center gap-2">
                {y.label}
                <span className="text-red-500 text-sm">Experimental</span>
              </div>
            ),
          };
        }),
      };
    });

    return [...list, ...image2TextList];
  }, [allOptions, t]);
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

  return (
    <Form.Item
      name={['parser_config', 'layout_recognize']}
      label={t('layoutRecognize')}
      initialValue={DocumentType.DeepDOC}
      tooltip={t('layoutRecognizeTip')}
    >
<<<<<<< HEAD
      <Select options={options} />
=======
      <Select options={options} popupMatchSelectWidth={false} />
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    </Form.Item>
  );
};

export default LayoutRecognize;
