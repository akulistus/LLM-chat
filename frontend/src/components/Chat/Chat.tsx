import { useCallback, useContext, useRef, type KeyboardEvent } from "react";
import { MessgaeDispatchContext } from "../../config/contexts/MessgeContext";
import { MessageType } from "../../@types/messages";
import { messagesApi } from "../../services/messagesApi";

import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";

export const Chat: React.FC = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(MessgaeDispatchContext);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.closest("form")?.requestSubmit();
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!inputRef.current) return;
    const prompt = inputRef.current.textContent.trim();
    if (!prompt) return;

    try {
      const result = await messagesApi.post(prompt);
      dispatch({
        type: "add",
        payload: {
          type: MessageType.REQUEST,
          id: result.id,
          data: prompt
        }
      });
    } finally {
      inputRef.current.textContent = "";
    }
  }, [dispatch]);

  return (
    <form
      className={cls["chat-container"]}
      action={handleSubmit}
    >
      <Input
        placeholder="Ask anything"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <Toolbar />
    </form>
  );
}