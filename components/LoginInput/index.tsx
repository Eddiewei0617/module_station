import React from "react";
import { BodySTY } from "./style";

interface I_LoginInput {
  type: string; // input的格式
  inputName: string;
  title?: string;
  icon?: string; // google icons
  className?: string;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wrongTimes?: number;
}

const LoginInput: React.FC<I_LoginInput> = (props) => {
  const {
    type,
    inputName,
    title,
    icon,
    className,
    onChangeCallback,
    wrongTimes,
  } = props;

  return (
    <BodySTY className={className}>
      <div className={`input-box`}>
        <span className="material-icons">{icon}</span>
        <label htmlFor={inputName}>{title}</label>
        <input
          type={type}
          id={inputName}
          disabled={wrongTimes === 3 && true}
          onChange={(e) => {
            onChangeCallback && onChangeCallback(e);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
      </div>
    </BodySTY>
  );
};

export default LoginInput;
