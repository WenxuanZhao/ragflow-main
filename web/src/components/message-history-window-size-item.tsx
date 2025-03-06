import { Form, InputNumber } from 'antd';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

const MessageHistoryWindowSizeItem = ({
  initialValue,
}: {
  initialValue: number;
}) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      name={'message_history_window_size'}
      label={t('flow.messageHistoryWindowSize')}
      initialValue={initialValue}
      tooltip={t('flow.messageHistoryWindowSizeTip')}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>
  );
};

export default MessageHistoryWindowSizeItem;
<<<<<<< HEAD
=======

export function MessageHistoryWindowSizeFormField() {
  const form = useFormContext();
  const { t } = useTranslation();

  return (
    <FormField
      control={form.control}
      name={'message_history_window_size'}
      render={({ field }) => (
        <FormItem>
          <FormLabel tooltip={t('flow.messageHistoryWindowSizeTip')}>
            {t('flow.messageHistoryWindowSize')}
          </FormLabel>
          <FormControl>
            <Input {...field} type={'number'}></Input>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
