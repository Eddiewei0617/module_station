import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { BodySTY } from "./style";

const Admin = () => {
  return (
    <BodySTY>
      <Head>
        <React.Fragment>
          <title>管理者頁</title>
          <meta property="og:title" content={"管理者頁"} />
        </React.Fragment>
      </Head>
      <Layout></Layout>
    </BodySTY>
  );
};

export default Admin;
