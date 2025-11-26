import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";
import { useCallback, useContext, useState, type FormEvent } from "react";
import { MessgaeDispatchContext } from "../../config/contexts/MessgeContext";

export const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const { dispatch } = useContext(MessgaeDispatchContext);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "post",
      payload: message
    });
  }, [message, dispatch]);

  return (
    <form
      className={cls["chat-container"]}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Ask anything"
        onChange={setMessage}
      />
      <Toolbar />
    </form>
  );
}