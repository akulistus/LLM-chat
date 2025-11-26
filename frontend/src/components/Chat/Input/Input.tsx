import { useCallback, type FormEvent, } from "react";
import cls from "./Input.module.scss";

interface InputProps {
  placeholder?: string,
  onChange: (value: string) => void,
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder = "",
    onChange
  } = props;

  const handleInput = useCallback((e: FormEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.innerText);
  }, [onChange]);

  return (
    <div className={cls["input-container"]}>
      <div
        className={cls["input-area"]}
        contentEditable="true"
        suppressContentEditableWarning={true}        
        onInput={handleInput}
      >
        <p 
          data-placeholder={placeholder}
        />
      </div>
    </div>
  )
};