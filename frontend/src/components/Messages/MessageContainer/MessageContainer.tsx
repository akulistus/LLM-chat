import { useCallback, useContext, useEffect, useRef } from "react";
import { classNames } from "../../../utils/classNames";
import { MessageContext, MessgaeDispatchContext } from "../../../config/contexts/MessgeContext";
import { messagesApi } from "../../../services/messagesApi";

import { Message } from "../MessageBubble/MessageBubble";

import cls from "./MessageContainer.module.scss";

export const MessageContainer: React.FC = () => {
  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const messages = useContext(MessageContext);
  const dispatch = useContext(MessgaeDispatchContext);

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await messagesApi.get();
      const value = await result.json();
      if (value) {
        dispatch!({
          type: "post",
          payload: value
        })
      }
    }

    fetchMessages();
  }, [dispatch]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollIntoView();
    }
  }, [messages]);

  const renderMessages = useCallback((messages: string[]) => {
    console.log(messages);
    return messages.map(message => (
      <Message>
        {message}
      </Message>
    ))
  }, []);

  return (
    <div ref={messageContainerRef} className={classNames(cls["message-box"])}>
      {renderMessages(messages?.messages)}
    </div>
  )
};