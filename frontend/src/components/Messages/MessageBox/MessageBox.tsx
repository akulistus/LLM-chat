import { useContext } from "react";
import { classNames } from "../../../utils/classNames";

import cls from "./MessageBox.module.scss";
import { MessageContext } from "../../../config/contexts/MessgeContext";

export const MessageBox: React.FC = () => {
  const { messages } = useContext(MessageContext);
  console.log(messages);

  return (
    <div className={classNames(cls["message-box"])}>
      {messages}
    </div>
  )
};