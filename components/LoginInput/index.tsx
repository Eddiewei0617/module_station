import React from "react";
import { BodySTY } from "./style";

interface I_LoginInput {
  type: string; // input的格式
  inputName: string;
  title?: string;
  icon?: string; // google icons
  className?: string;
}

const LoginInput: React.FC<I_LoginInput> = (props) => {
  const { type, inputName, title, icon, className } = props;
  return (
    <BodySTY className={className}>
      <div className={`input-box`}>
        <span className="material-icons">{icon}</span>
        <label htmlFor={inputName}>{title}</label>
        <input type={type} id={inputName} />
      </div>
    </BodySTY>
  );
};

export default LoginInput;
