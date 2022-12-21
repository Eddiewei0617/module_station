import React from "react";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className="right-side">
      <button>
        <div className="material-icons">wallet</div>
        <p>方案資訊</p>
      </button>
      <button>
        <div className="material-icons">settings</div>
        <p>設定</p>
      </button>
      <button>
        <div className="material-icons">notifications_active</div>
        <p>通知</p>
        <div className="notification-num">
          <p>1</p>
        </div>
      </button>
      <div className="member-name">
        <p>魯小小</p>
      </div>
    </div>
  );
};

export default RightSide;
