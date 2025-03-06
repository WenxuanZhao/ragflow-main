import { useTranslate } from '@/hooks/common-hooks';
import { IModalProps } from '@/interfaces/common';
import { InboxOutlined } from '@ant-design/icons';
import {
<<<<<<< HEAD
  Flex,
  Modal,
=======
  Checkbox,
  Flex,
  Modal,
  Progress,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  Segmented,
  Tabs,
  TabsProps,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';

import styles from './index.less';

const { Dragger } = Upload;

const FileUpload = ({
  directory,
  fileList,
  setFileList,
<<<<<<< HEAD
=======
  uploadProgress,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}: {
  directory: boolean;
  fileList: UploadFile[];
  setFileList: Dispatch<SetStateAction<UploadFile[]>>;
<<<<<<< HEAD
=======
  uploadProgress: number;
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
}) => {
  const { t } = useTranslate('fileManager');
  const props: UploadProps = {
    multiple: true,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
<<<<<<< HEAD
    beforeUpload: (file) => {
=======
    beforeUpload: (file: UploadFile) => {
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      setFileList((pre) => {
        return [...pre, file];
      });

      return false;
    },
    directory,
    fileList,
<<<<<<< HEAD
  };

  return (
    <Dragger {...props} className={styles.uploader}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{t('uploadTitle')}</p>
      <p className="ant-upload-hint">{t('uploadDescription')}</p>
      {false && <p className={styles.uploadLimit}>{t('uploadLimit')}</p>}
    </Dragger>
  );
};

=======
    progress: {
      strokeWidth: 2,
    },
  };

  return (
    <>
      <Progress percent={uploadProgress} showInfo={false} />
      <Dragger {...props} className={styles.uploader}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">{t('uploadTitle')}</p>
        <p className="ant-upload-hint">{t('uploadDescription')}</p>
        {false && <p className={styles.uploadLimit}>{t('uploadLimit')}</p>}
      </Dragger>
    </>
  );
};

interface IFileUploadModalProps extends IModalProps<boolean> {
  uploadFileList: UploadFile[];
  setUploadFileList: Dispatch<SetStateAction<UploadFile[]>>;
  uploadProgress: number;
  setUploadProgress: Dispatch<SetStateAction<number>>;
}

>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
const FileUploadModal = ({
  visible,
  hideModal,
  loading,
  onOk: onFileUploadOk,
<<<<<<< HEAD
}: IModalProps<UploadFile[]>) => {
  const { t } = useTranslate('fileManager');
  const [value, setValue] = useState<string | number>('local');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [directoryFileList, setDirectoryFileList] = useState<UploadFile[]>([]);

  const clearFileList = () => {
    setFileList([]);
    setDirectoryFileList([]);
  };

  const onOk = async () => {
    const ret = await onFileUploadOk?.([...fileList, ...directoryFileList]);
=======
  uploadFileList: fileList,
  setUploadFileList: setFileList,
  uploadProgress,
  setUploadProgress,
}: IFileUploadModalProps) => {
  const { t } = useTranslate('fileManager');
  const [value, setValue] = useState<string | number>('local');
  const [parseOnCreation, setParseOnCreation] = useState(false);

  const clearFileList = () => {
    setFileList([]);
    setUploadProgress(0);
  };

  const onOk = async () => {
    if (uploadProgress === 100) {
      hideModal?.();
      return;
    }

    const ret = await onFileUploadOk?.(parseOnCreation);
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    return ret;
  };

  const afterClose = () => {
    clearFileList();
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('file'),
      children: (
        <FileUpload
          directory={false}
          fileList={fileList}
          setFileList={setFileList}
<<<<<<< HEAD
=======
          uploadProgress={uploadProgress}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        ></FileUpload>
      ),
    },
    {
      key: '2',
      label: t('directory'),
      children: (
        <FileUpload
          directory
<<<<<<< HEAD
          fileList={directoryFileList}
          setFileList={setDirectoryFileList}
=======
          fileList={fileList}
          setFileList={setFileList}
          uploadProgress={uploadProgress}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        ></FileUpload>
      ),
    },
  ];

  return (
    <>
      <Modal
        title={t('uploadFile')}
        open={visible}
        onOk={onOk}
        onCancel={hideModal}
        confirmLoading={loading}
        afterClose={afterClose}
      >
        <Flex gap={'large'} vertical>
          <Segmented
            options={[
              { label: t('local'), value: 'local' },
              { label: t('s3'), value: 's3' },
            ]}
            block
            value={value}
            onChange={setValue}
          />
          {value === 'local' ? (
<<<<<<< HEAD
            <Tabs defaultActiveKey="1" items={items} />
=======
            <>
              <Checkbox
                checked={parseOnCreation}
                onChange={(e) => setParseOnCreation(e.target.checked)}
              >
                {t('parseOnCreation')}
              </Checkbox>
              <Tabs defaultActiveKey="1" items={items} />
            </>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
          ) : (
            t('comingSoon', { keyPrefix: 'common' })
          )}
        </Flex>
      </Modal>
    </>
  );
};

export default FileUploadModal;
