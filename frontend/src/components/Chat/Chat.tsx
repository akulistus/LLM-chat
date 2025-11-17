import { Toolbar } from "./Toolbar/Toolbar";

import cls from "./Chat.module.scss";

interface ChatProps {
  palceholder?: string;

}

export const Chat: React.FC<ChatProps> = (props) => {
  const {
    palceholder,
  } = props;

  return (
    <div className={cls["chat-container"]}>
      <Toolbar />
    </div>
  );
}