import { Button } from "../../Button/Button";
import SendIcon from "../../../assets/icons/icon-send.svg?react";
import AttachIcon from "../../../assets/icons/icon-attach.svg?react";

import cls from "./Toolbar.module.scss";

export const Toolbar: React.FC = () => {
  return (
    <div className={cls["toolbar-container"]}>
      <Button type="button" theme="dark">
        <AttachIcon />
        Attach
      </Button>
      <Button type="submit">
        <SendIcon />
        Send
      </Button>
    </div>
  )
}