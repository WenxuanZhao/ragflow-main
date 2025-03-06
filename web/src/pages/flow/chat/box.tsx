import MessageItem from '@/components/message-item';
import { MessageType } from '@/constants/chat';
<<<<<<< HEAD
import { useTranslate } from '@/hooks/common-hooks';
import { useGetFileIcon } from '@/pages/chat/hooks';
import { buildMessageItemReference } from '@/pages/chat/utils';
import { Button, Flex, Input, Spin } from 'antd';

import { useSendNextMessage } from './hooks';

=======
import { useGetFileIcon } from '@/pages/chat/hooks';
import { buildMessageItemReference } from '@/pages/chat/utils';
import { Flex, Spin } from 'antd';

import { useSendNextMessage } from './hooks';

import MessageInput from '@/components/message-input';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
import PdfDrawer from '@/components/pdf-drawer';
import { useClickDrawer } from '@/components/pdf-drawer/hooks';
import { useFetchFlow } from '@/hooks/flow-hooks';
import { useFetchUserInfo } from '@/hooks/user-setting-hooks';
import { buildMessageUuidWithRole } from '@/utils/chat';
import styles from './index.less';

const FlowChatBox = () => {
  const {
    sendLoading,
    handleInputChange,
    handlePressEnter,
    value,
    loading,
    ref,
    derivedMessages,
    reference,
  } = useSendNextMessage();

  const { visible, hideModal, documentId, selectedChunk, clickDocumentButton } =
    useClickDrawer();
  useGetFileIcon();
<<<<<<< HEAD
  const { t } = useTranslate('chat');
=======
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  const { data: userInfo } = useFetchUserInfo();
  const { data: canvasInfo } = useFetchFlow();

  return (
    <>
      <Flex flex={1} className={styles.chatContainer} vertical>
        <Flex flex={1} vertical className={styles.messageContainer}>
          <div>
            <Spin spinning={loading}>
              {derivedMessages?.map((message, i) => {
                return (
                  <MessageItem
                    loading={
                      message.role === MessageType.Assistant &&
                      sendLoading &&
                      derivedMessages.length - 1 === i
                    }
                    key={buildMessageUuidWithRole(message)}
                    nickname={userInfo.nickname}
                    avatar={userInfo.avatar}
                    avatarDialog={canvasInfo.avatar}
                    item={message}
                    reference={buildMessageItemReference(
                      { message: derivedMessages, reference },
                      message,
                    )}
                    clickDocumentButton={clickDocumentButton}
                    index={i}
                    showLikeButton={false}
                    sendLoading={sendLoading}
                  ></MessageItem>
                );
              })}
            </Spin>
          </div>
          <div ref={ref} />
        </Flex>
<<<<<<< HEAD
        <Input
          size="large"
          placeholder={t('sendPlaceholder')}
          value={value}
          suffix={
            <Button
              type="primary"
              onClick={handlePressEnter}
              loading={sendLoading}
            >
              {t('send')}
            </Button>
          }
          onPressEnter={handlePressEnter}
          onChange={handleInputChange}
=======
        <MessageInput
          showUploadIcon={false}
          value={value}
          sendLoading={sendLoading}
          disabled={false}
          sendDisabled={sendLoading}
          conversationId=""
          onPressEnter={handlePressEnter}
          onInputChange={handleInputChange}
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        />
      </Flex>
      <PdfDrawer
        visible={visible}
        hideModal={hideModal}
        documentId={documentId}
        chunk={selectedChunk}
      ></PdfDrawer>
    </>
  );
};

export default FlowChatBox;
