import type { ButtonHTMLAttributes } from "react";

import cls from "./Button.module.scss";
import { classNames } from "../../utils/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "light" | "dark",
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    theme = "light",
    children,
    ...otherProps
  } = props;

  return (
    <button className={classNames(cls.button, [cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
};