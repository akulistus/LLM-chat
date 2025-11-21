import { Chat } from "../../components/Chat/Chat";
import { MessageBox } from "../../components/Messages/MessageBox/MessageBox";
import { MessageProvider } from "../../config/providers/MessageProvieder";

import cls from "./ChartPage.module.scss";

export const ChartPage: React.FC = () => {
  return (
    <MessageProvider>
      <div className={cls["chat-page"]}>
        <div className={cls["message-box-container"]}>
          <MessageBox />
        </div>
        <div className={cls["chat-container"]}>
          <Chat />
        </div>
      </div>
    </MessageProvider>
  );
}