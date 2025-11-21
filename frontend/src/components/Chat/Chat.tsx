import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";
import { useCallback, type FormEvent } from "react";

export const Chat: React.FC = () => {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form className={cls["chat-container"]} onSubmit={handleSubmit}>
      <Input placeholder="Ask anything" />
      <Toolbar />
    </form>
  );
}