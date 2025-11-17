import { Chat } from "../../components/Chat/Chat";

import cls from "./ChartPage.module.scss";

export const ChartPage: React.FC = () => {
  return (
    <div className={cls["chat-page"]}>
      <div className={cls["chat-container"]}>
        <Chat />
      </div>
    </div>
  );
}