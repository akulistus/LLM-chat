import { type HTMLAttributes, type RefObject, } from "react";
import cls from "./Input.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string,
  ref: RefObject<HTMLDivElement | null>,
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder = "",
    ref,
    ...othreProps
  } = props;

  return (
    <div className={cls["input-container"]}>
      <div
        ref={ref}
        className={cls["input-area"]}
        contentEditable="true"
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}        
        {...othreProps}
      >
      </div>
    </div>
  )
};