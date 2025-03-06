import { useTranslate } from '@/hooks/common-hooks';
import { Form, Slider } from 'antd';
import { useFormContext } from 'react-hook-form';
<<<<<<< HEAD
=======
import { SingleFormSlider } from './ui/dual-range-slider';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
<<<<<<< HEAD
import { FormSlider } from './ui/slider';
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

type FieldType = {
  top_n?: number;
};

interface IProps {
  initialValue?: number;
  max?: number;
}

const TopNItem = ({ initialValue = 8, max = 30 }: IProps) => {
  const { t } = useTranslate('chat');

  return (
    <Form.Item<FieldType>
      label={t('topN')}
      name={'top_n'}
      initialValue={initialValue}
      tooltip={t('topNTip')}
    >
      <Slider max={max} />
    </Form.Item>
  );
};

export default TopNItem;

interface SimilaritySliderFormFieldProps {
  max?: number;
}

export function TopNFormField({ max = 30 }: SimilaritySliderFormFieldProps) {
  const form = useFormContext();
  const { t } = useTranslate('chat');

  return (
    <FormField
      control={form.control}
      name={'top_n'}
      render={({ field }) => (
        <FormItem>
<<<<<<< HEAD
          <FormLabel>{t('topN')}</FormLabel>
          <FormControl>
            <FormSlider {...field} max={max}></FormSlider>
=======
          <FormLabel tooltip={t('topNTip')}>{t('topN')}</FormLabel>
          <FormControl>
            <SingleFormSlider {...field} max={max}></SingleFormSlider>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
