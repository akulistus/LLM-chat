import { useCallback, useContext, useRef } from "react";
import { classNames } from "../../../utils/classNames";
import { MessageContext } from "../../../config/contexts/MessgeContext";
import { Message } from "../MessageBubble/MessageBubble";
import { MessageType, type TMessage } from "../../../@types/messages";


import cls from "./MessageContainer.module.scss";

export const MessageContainer: React.FC = () => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const messages = useContext(MessageContext);

  const renderMessages = useCallback((messages: TMessage[]) => {
    return messages.sort((a, b) => a.id - b.id).map(message => {
      switch(message.type) {
        case MessageType.REQUEST: {
          return (
            <Message>
              {message.data}
            </Message>
          )
        }
        case MessageType.RESPONSE: {
          return (
            <article>
              {JSON.stringify(message.data)}
            </article>
          )
        }
      }
    })
  }, []);

  return (
    <div ref={messageContainerRef} className={classNames(cls["message-box"])}>
      {renderMessages(messages?.messages)}
      <div style={{ color: "#fff" }}  />
    </div>
  )
};