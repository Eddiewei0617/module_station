import React, { useRef, useState } from "react";
import { BodySTY } from "./style";
import { arr } from "./data";
import { useRouter } from "next/router";

interface I_SubItem {
  subtitle: string;
  value: string;
}

const SideBar = () => {
  const [activeTitle, setActiveTitle] = useState<string>("title1");
  const [subLength, setSubLength] = useState<number>(
    arr[0].subtitles.length + 1
  );
  const router = useRouter();

  // 看點到哪個title就百葉窗哪個
  const handleTitle = (e: any, titleItem: any) => {
    if (activeTitle === titleItem.value) return setActiveTitle("");
    setActiveTitle(titleItem.value);
    setSubLength(titleItem.subtitles.length + 1);
  };

  // 點了哪個subtitle就進去並渲染該畫面
  const handleRoute = (subItem: I_SubItem) => {
    if (subItem.value === "planInfo") return router.push("/title1/planinfo");
  };

  return (
    <BodySTY subLength={subLength}>
      {arr.map((item, i) => {
        return (
          <div
            key={item.title}
            className={` ${
              activeTitle === item.value && "current-active"
            }  single-part`}
          >
            <div onClick={(e) => handleTitle(e, item)} className="title">
              {item.title}
            </div>
            <ul>
              {item.subtitles.map((subItem) => (
                <li key={subItem.subtitle} onClick={() => handleRoute(subItem)}>
                  {subItem.subtitle}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </BodySTY>
  );
};

export default SideBar;
