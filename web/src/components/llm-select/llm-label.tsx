<<<<<<< HEAD
import { LlmModelType } from '@/constants/knowledge';
import { useComposeLlmOptionsByModelTypes } from '@/hooks/llm-hooks';
import { useMemo } from 'react';
=======
import { getLLMIconName, getLlmNameAndFIdByLlmId } from '@/utils/llm-util';
import { LlmIcon } from '../svg-icon';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

interface IProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const LLMLabel = ({ value }: IProps) => {
<<<<<<< HEAD
  const modelOptions = useComposeLlmOptionsByModelTypes([
    LlmModelType.Chat,
    LlmModelType.Image2text,
  ]);

  const label = useMemo(() => {
    for (const item of modelOptions) {
      for (const option of item.options) {
        if (option.value === value) {
          return option.label;
        }
      }
    }
  }, [modelOptions, value]);

  return <div>{label}</div>;
=======
  const { llmName, fId } = getLlmNameAndFIdByLlmId(value);

  return (
    <div className="flex items-center gap-1">
      <LlmIcon
        name={getLLMIconName(fId, llmName)}
        width={20}
        height={20}
        size={'small'}
      />
      {llmName}
    </div>
  );
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
};

export default LLMLabel;
