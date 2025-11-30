import { useContext, useEffect } from "react";
import { Chat } from "../../components/Chat/Chat";
import { MessageContainer } from "../../components/Messages/MessageContainer/MessageContainer";
import { apiRoutes } from "../../helpers/routes";
import { MessgaeDispatchContext } from "../../config/contexts/MessgeContext";

import cls from "./ChartPage.module.scss";
import { MessageType } from "../../@types/messages";
import type { WSMessage } from "../../@types/services";

export const ChartPage: React.FC = () => {
  const { dispatch } = useContext(MessgaeDispatchContext);

  useEffect(() => {
    const ws = new WebSocket(apiRoutes.socket());
    ws.onopen = () => {
      console.log("Connection established");
    };

    ws.onmessage = ((ev: MessageEvent<string>) => {
      const message: WSMessage = JSON.parse(ev.data);
      console.log(message);
      dispatch({
        type: "append",
        payload: {
          type: MessageType.RESPONSE,
          id: message.id,
          data: message.data
        }
      })
    });

  }, [dispatch]);

  return (
    <div className={cls["chat-page"]}>
      <div className={cls["message-box-container"]}>
        <MessageContainer />
      </div>
      <div className={cls["chat-container"]}>
        <Chat />
      </div>
    </div>
  );
}