import React from "react";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="lion-logo">
        <Image
          src={"/images/lion-logo.png"}
          width={50}
          height={50}
          alt={"lionLogo"}
        ></Image>
      </div>
      <p>雄獅通運</p>
    </div>
  );
};

export default LeftSide;
