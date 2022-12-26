import React, { useState } from "react";
import Image from "next/image";
import { BodySTY } from "./style";
import LoginInput from "../../components/LoginInput";
import Head from "next/head";
import Button from "../../components/Button";
import LoginError from "../../content/LoginError";

interface I_AdminInput {
  account: string;
  password: string;
}

const Login = () => {
  const [adminInput, setAdminInput] = useState<I_AdminInput>({
    account: "",
    password: "",
  });
  const [success, setSuccess] = useState<boolean>(true);

  // 隨時抓取輸入的帳號和密碼並存入狀態
  const handleInputChange = (type: string, input: string) => {
    setAdminInput((prev) => {
      const newState: I_AdminInput | any = { ...prev };
      newState[type] = input;
      return newState;
    });
  };

  // 按下登入按鈕會...
  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("adminInput", adminInput);
    if (adminInput.account === "123" && adminInput.password === "123") {
      setSuccess(true);
      alert("LOGIN!!!!!!!!!");
    } else {
      // 錯誤訊息
      setSuccess(false);
    }
  };

  return (
    <BodySTY>
      <Head>
        <React.Fragment>
          <title>平台登入</title>
          <meta property="og:title" content={"平台登入"} />
        </React.Fragment>
      </Head>
      <div className="lion-logo">
        <Image
          src={"/images/lion-logo.png"}
          width={180}
          height={180}
          alt={"lionLogo"}
        ></Image>
      </div>
      <p>Welcome!</p>
      <p>雄獅通運同仁</p>

      {/* 登入錯誤才跳出錯誤訊息 */}
      {success === false && <LoginError></LoginError>}

      <LoginInput
        type="text"
        inputName="account"
        title="帳號"
        icon="person"
        className="account-input"
        onChangeCallback={(e) => {
          handleInputChange("account", e.target.value);
        }}
      ></LoginInput>
      <div className="all-password">
        <LoginInput
          type="password"
          inputName="password"
          title="密碼"
          icon="key"
          onChangeCallback={(e) => {
            handleInputChange("password", e.target.value);
          }}
          onKeyDown={(e) => {}}
        ></LoginInput>
        <div className="forgot-password">
          <span className="material-icons">help</span>
          <button>忘記密碼</button>
        </div>
      </div>
      <Button
        name="登入"
        onCallBack={(e) => {
          handleLogin(e);
        }}
      ></Button>
    </BodySTY>
  );
};

export default Login;
