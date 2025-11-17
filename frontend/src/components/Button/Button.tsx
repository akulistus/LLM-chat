import type { ButtonHTMLAttributes } from "react";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "light" | "dark",
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    theme,
    children
  } = props;

  return (
    <button className={cls.button}>
      {children}
    </button>
  )
};