import type { PropsWithChildren } from "react";
import { classNames } from "../../../utils/classNames";

import cls from "./Request.module.scss";

export const Request: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classNames(cls.request)}>
      {children}
    </div>
  )
};