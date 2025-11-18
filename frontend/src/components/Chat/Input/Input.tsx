import { useCallback, useState } from "react";

interface InputProps {
  placeholder?: string
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    placeholder = "",
    children
  } = props;
  const [value, setValue] = useState<string>(placeholder);

  const handleInput = useCallback((e: React.InputEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue()
  }, []);

  return (
    <div 
      contentEditable="true"
      suppressContentEditableWarning={true}
      onInput={handleInput}
    >
      <p>
        {value}
      </p>
    </div>
  )
};