import { useContext, useEffect, useRef } from "react";
import { Chat } from "../../components/Chat/Chat";
import { MessageContainer } from "../../components/Messages/MessageContainer/MessageContainer";
import { apiRoutes } from "../../helpers/routes";
import { MessgaeDispatchContext } from "../../config/contexts/MessgeContext";

import cls from "./ChartPage.module.scss";
import { MessageType } from "../../@types/messages";
import type { Token, WSMessage } from "../../@types/services";

export const ChartPage: React.FC = () => {
  const messageId = useRef<number>(-1);
  const buffer = useRef<string>("");
  const { dispatch } = useContext(MessgaeDispatchContext);

  useEffect(() => {
    const ws = new WebSocket(apiRoutes.socket());
    ws.onopen = () => {
      console.log("Connection established");
    };

    ws.onmessage = ((ev: MessageEvent<string>) => {
      const message: WSMessage = JSON.parse(ev.data);
      if (message.id !== messageId.current) {
        buffer.current = "";
        messageId.current = message.id;
      }
      buffer.current += message.chunk;
      console.log(buffer.current);
      const lines: Token[] = buffer.current.split(/(?=\{"type")/)
        .filter(token => token.trim())
        .map(token => {
          console.log(token);
          return JSON.parse(token);
        });
      buffer.current = JSON.stringify(lines.pop()!);
      for (const line of lines) {
        if (line.type === "text-delta") {
          if (!line.delta.trim()) continue;
          console.log(line);
          dispatch({
            type: "append",
            payload: {
              type: MessageType.RESPONSE,
              id: message.id,
              data: line.delta
            }
          });
        }
      }
    });

    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    }
  }, [dispatch, buffer]);

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