import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";
import { useCallback, useState, type FormEvent } from "react";
import { messagesApi } from "../../services/messagesApi";

export const Chat: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await messagesApi.post(message);
    if (result.status === 200) {
      setMessage("");
    }
  }, [message]);

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