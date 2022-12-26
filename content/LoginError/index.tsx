import React from "react";
import { BodySTY } from "./style";

const LoginError = () => {
  return (
    <BodySTY>
      <span className="material-icons">warning</span>
      <p className="err-msg">您輸入的帳號或密碼有誤，請再檢查一次!</p>
    </BodySTY>
  );
};

export default LoginError;
