import { Button } from "../../Button/Button";

import cls from "./Toolbar.module.scss";

export const Toolbar: React.FC = () => {
  return (
    <div className={cls["toolbar-container"]}>
      <Button>
        send
      </Button>
      <Button>
        attach
      </Button>
    </div>
  )
}