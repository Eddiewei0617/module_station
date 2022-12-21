import React from "react";
import Header from "./Header";
import { BodySTY } from "./style";

const withLayout = (props: any) => {
  const { children } = props;
  return (
    <BodySTY>
      <Header></Header>
      {children}
    </BodySTY>
  );
};

export default withLayout;
