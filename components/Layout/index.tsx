import Head from "next/head";
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { BodySTY } from "./style";

const withLayout = (props: any) => {
  const { children } = props;
  console.log("children", children);

  return (
    <BodySTY>
      <Head>
        <React.Fragment>
          <title>管理者頁</title>
          <meta property="og:title" content={"管理者頁"} />
        </React.Fragment>
      </Head>
      <Header></Header>
      <section>
        <SideBar></SideBar>
        <div className="seperate"></div>
        {children}
      </section>
    </BodySTY>
  );
};

export default withLayout;
