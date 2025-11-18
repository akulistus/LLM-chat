import { Toolbar } from "./Toolbar/Toolbar";
import { Input } from "./Input/Input";

import cls from "./Chat.module.scss";

export const Chat: React.FC = () => {

  return (
    <form className={cls["chat-container"]}>
      <Input />
      <Toolbar />
    </form>
  );
}