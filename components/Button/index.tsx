import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";

interface I_Button {
  name: string;
  className?: string | any;
  onCallBack?: () => void;
}

const Button: React.FC<I_Button> = (props) => {
  const { name, className, onCallBack } = props;
  return (
    <BodySTY className={cx({ [className]: className })}>
      <button
        onClick={() => {
          onCallBack && onCallBack();
        }}
      >
        {name}
      </button>
    </BodySTY>
  );
};

export default Button;
