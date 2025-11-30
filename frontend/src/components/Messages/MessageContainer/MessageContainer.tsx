import { useCallback, useContext, useEffect, useRef } from "react";
import { classNames } from "../../../utils/classNames";
import { MessageContext } from "../../../config/contexts/MessgeContext";
import { Request } from "../Request/Request";
import { MessageType, type TMessage } from "../../../@types/messages";


import cls from "./MessageContainer.module.scss";
import { Response } from "../Response/Response";

export const MessageContainer: React.FC = () => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messages = useContext(MessageContext);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const renderMessages = useCallback((messages: TMessage[]) => {
    return messages.sort((a, b) => a.id - b.id).map(message => {
      switch(message.type) {
        case MessageType.REQUEST: {
          return (
            <Request key={message.id}>
              {message.data}
            </Request>
          )
        }
        case MessageType.RESPONSE: {
          return (
            <Response content={message.data} />
          )
        }
      }
    })
  }, []);

  return (
    <div ref={messageContainerRef} className={classNames(cls["message-box"])}>
      {renderMessages(messages?.messages)}
      <div ref={messagesEndRef} />
    </div>
  )
};