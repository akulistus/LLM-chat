import { useContext, useEffect } from "react";
import { classNames } from "../../../utils/classNames";

import cls from "./MessageBox.module.scss";
import { MessageContext, MessgaeDispatchContext } from "../../../config/contexts/MessgeContext";
import { messagesApi } from "../../../services/messagesApi";

export const MessageBox: React.FC = () => {
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

  return (
    <div className={classNames(cls["message-box"])}>
      {messages?.messages}
    </div>
  )
};