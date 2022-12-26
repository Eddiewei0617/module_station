import React, { useEffect, useState } from "react";
import { BodySTY } from "./style";

interface I_LoError {
  wrongTimes: number;
  setWrongTimes: (wrongTimes: number) => void;
}

const LoginError: React.FC<I_LoError> = (props) => {
  const { wrongTimes, setWrongTimes } = props;
  const [errorMsg, serErrorMsg] = useState<string>(
    "您輸入的帳號或密碼有誤，請再檢查一次!"
  );

  // 判斷有沒有輸入錯誤超過3次
  useEffect(() => {
    if (wrongTimes === 3) {
      serErrorMsg("你輸入的錯誤次數太多，暫時鎖定帳號，請 1 小時後再試!");
    } else if (wrongTimes > 3) {
      serErrorMsg("您輸入的帳號或密碼有誤，請再檢查一次!");
      setWrongTimes(0);
    }
  }, [setWrongTimes, wrongTimes]);
  return (
    <BodySTY>
      <span className="material-icons">warning</span>
      <p className="err-msg">{errorMsg}</p>
    </BodySTY>
  );
};

export default LoginError;
