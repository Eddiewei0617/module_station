import React from "react";
import Image from "next/image";
import { BodySTY } from "./style";
import LoginInput from "../../components/LoginInput";
import Head from "next/head";
import Button from "../../components/Button";

const Login = () => {
  const handleLogin = () => {
    alert("LOGIN!!!!!!!!!");
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
      <LoginInput
        type="text"
        inputName="account"
        title="帳號"
        icon="person"
        className="account-input"
      ></LoginInput>
      <div className="all-password">
        <LoginInput
          type="password"
          inputName="password"
          title="密碼"
          icon="key"
        ></LoginInput>
        <div className="forgot-password">
          <span className="material-icons">help</span>
          <button>忘記密碼</button>
        </div>
      </div>
      <Button
        name="登入"
        onCallBack={() => {
          handleLogin();
        }}
      ></Button>
    </BodySTY>
  );
};

export default Login;
