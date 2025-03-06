import { useTranslate } from '@/hooks/common-hooks';
import { Form, Slider } from 'antd';
import { useFormContext } from 'react-hook-form';
<<<<<<< HEAD
=======
import { SingleFormSlider } from '../ui/dual-range-slider';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
<<<<<<< HEAD
import { FormSlider } from '../ui/slider';
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

type FieldType = {
  similarity_threshold?: number;
  // vector_similarity_weight?: number;
};

interface IProps {
  isTooltipShown?: boolean;
  vectorSimilarityWeightName?: string;
}

const SimilaritySlider = ({
  isTooltipShown = false,
  vectorSimilarityWeightName = 'vector_similarity_weight',
}: IProps) => {
  const { t } = useTranslate('knowledgeDetails');

  return (
    <>
      <Form.Item<FieldType>
        label={t('similarityThreshold')}
        name={'similarity_threshold'}
        tooltip={isTooltipShown && t('similarityThresholdTip')}
        initialValue={0.2}
      >
        <Slider max={1} step={0.01} />
      </Form.Item>
      <Form.Item
        label={t('vectorSimilarityWeight')}
        name={vectorSimilarityWeightName}
        initialValue={1 - 0.3}
        tooltip={isTooltipShown && t('vectorSimilarityWeightTip')}
      >
        <Slider max={1} step={0.01} />
      </Form.Item>
    </>
  );
};

export default SimilaritySlider;

interface SimilaritySliderFormFieldProps {
<<<<<<< HEAD
  name?: string;
}

export function SimilaritySliderFormField({
  name = 'vector_similarity_weight',
=======
  vectorSimilarityWeightName?: string;
  isTooltipShown?: boolean;
}

export function SimilaritySliderFormField({
  vectorSimilarityWeightName = 'vector_similarity_weight',
  isTooltipShown,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}: SimilaritySliderFormFieldProps) {
  const form = useFormContext();
  const { t } = useTranslate('knowledgeDetails');

  return (
<<<<<<< HEAD
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('vectorSimilarityWeight')}</FormLabel>
          <FormControl>
            <FormSlider {...field}></FormSlider>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
=======
    <>
      <FormField
        control={form.control}
        name={'similarity_threshold'}
        render={({ field }) => (
          <FormItem>
            <FormLabel tooltip={isTooltipShown && t('similarityThresholdTip')}>
              {t('similarityThreshold')}
            </FormLabel>
            <FormControl>
              <SingleFormSlider
                {...field}
                max={1}
                step={0.01}
              ></SingleFormSlider>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={vectorSimilarityWeightName}
        render={({ field }) => (
          <FormItem>
            <FormLabel
              tooltip={isTooltipShown && t('vectorSimilarityWeightTip')}
            >
              {t('vectorSimilarityWeight')}
            </FormLabel>
            <FormControl>
              <SingleFormSlider
                {...field}
                max={1}
                step={0.01}
              ></SingleFormSlider>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  );
}
