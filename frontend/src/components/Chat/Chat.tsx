import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";
import { useCallback, useContext, useState, type FormEvent } from "react";
import { messagesApi } from "../../services/messagesApi";
import { MessgaeDispatchContext } from "../../config/contexts/MessgeContext";

export const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useContext(MessgaeDispatchContext);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await messagesApi.post(message);
    const decoder = new TextDecoder();
    for await (const chunk of result.body) {
      console.log(decoder.decode(chunk, { stream: true }));
    }
  }, [message, dispatch]);

  return (
    <form
      className={cls["chat-container"]}
      onSubmit={handleSubmit}
    >
      <Input
        value={message}
        placeholder="Ask anything"
        onChange={setMessage}
      />
      <Toolbar />
    </form>
  );
}