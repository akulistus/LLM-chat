import type { PropsWithChildren } from "react";
import { classNames } from "../../../utils/classNames";

import cls from "./MessageBubble.module.scss";

export const Message: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classNames(cls.message)}>
      {children}
    </div>
  )
};