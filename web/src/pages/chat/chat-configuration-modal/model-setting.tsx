import classNames from 'classnames';
import { useEffect } from 'react';
import { ISegmentedContentProps } from '../interface';

import LlmSettingItems from '@/components/llm-setting-items';
<<<<<<< HEAD
import { variableEnabledFieldMap } from '@/constants/chat';
import { Variable } from '@/interfaces/database/chat';
=======
import {
  ChatVariableEnabledField,
  variableEnabledFieldMap,
} from '@/constants/chat';
import { Variable } from '@/interfaces/database/chat';
import { setInitialChatVariableEnabledFieldValue } from '@/utils/chat';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import styles from './index.less';

const ModelSetting = ({
  show,
  form,
  initialLlmSetting,
  visible,
}: ISegmentedContentProps & {
  initialLlmSetting?: Variable;
  visible?: boolean;
}) => {
  useEffect(() => {
    if (visible) {
      const values = Object.keys(variableEnabledFieldMap).reduce<
        Record<string, boolean>
      >((pre, field) => {
        pre[field] =
          initialLlmSetting === undefined
<<<<<<< HEAD
            ? true
=======
            ? setInitialChatVariableEnabledFieldValue(
                field as ChatVariableEnabledField,
              )
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
            : !!initialLlmSetting[
                variableEnabledFieldMap[
                  field as keyof typeof variableEnabledFieldMap
                ] as keyof Variable
              ];
        return pre;
      }, {});
      form.setFieldsValue(values);
    }
  }, [form, initialLlmSetting, visible]);

  return (
    <section
      className={classNames({
        [styles.segmentedHidden]: !show,
      })}
    >
      {visible && <LlmSettingItems prefix="llm_setting"></LlmSettingItems>}
    </section>
  );
};

export default ModelSetting;
