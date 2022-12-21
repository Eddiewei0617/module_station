import React from "react";
import LeftSide from "../../../content/Header/LeftSide";
import RightSide from "../../../content/Header/RightSide";
import { BodySTY } from "./style";

const Header = () => {
  return (
    <BodySTY>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </BodySTY>
  );
};

export default Header;
