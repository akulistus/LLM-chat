import { useCallback, useState } from "react";

import cls from "./Input.module.scss";

interface InputProps {
  placeholder?: string
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder = "",
  } = props;
  const [value, setValue] = useState<string>("");

  const handleInput = useCallback((e: React.InputEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.textContent);
  }, []);

  return (
    <div className={cls["input-container"]}>
      <div
        className={cls["input-area"]}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={handleInput}
        
      >
        <p data-placeholder={placeholder}>
        </p>
      </div>
    </div>
  )
};