import { Chat } from "../../components/Chat/Chat";
import { MessageContainer } from "../../components/Messages/MessageContainer/MessageContainer";
import { MessageProvider } from "../../config/providers/MessageProvider";

import cls from "./ChartPage.module.scss";

export const ChartPage: React.FC = () => {
  return (
    <MessageProvider>
      <div className={cls["chat-page"]}>
        <div className={cls["message-box-container"]}>
          <MessageContainer />
        </div>
        <div className={cls["chat-container"]}>
          <Chat />
        </div>
      </div>
    </MessageProvider>
  );
}