import React from "react";
import Layout from "../../../components/Layout";
import { BodySTY } from "./style";

const PlanInfo = () => {
  return (
    <Layout>
      <BodySTY>
        <h1>方案資訊</h1>
        <div className="info-block">
          <p>公司名稱: 【雄獅通運】</p>
          <p>平台管理員: 王大明</p>
          <p>方案起始日: 2022/10/01</p>
          <p>方案起始日: 2022/12/31</p>
          <p>統一編號: 23114211</p>
        </div>
        <div className="notice">
          *如需續約，請管理員或負責同仁點右下角對話洽專人服務
        </div>
      </BodySTY>
    </Layout>
  );
};

export default PlanInfo;
