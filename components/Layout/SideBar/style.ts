import styled from "styled-components";
export const BodySTY = styled.div<{ subLength?: number | null }>`
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.XinMedia.LightBlue};
  margin-left: 12px;
  margin-top: 40px;
  /* padding-right: 12px; */
  /* padding-top: 20px; */
  border-right: 1px solid ${({ theme }) => theme.XinMedia.Grey};
  z-index: 5;

  // 每一個標題區塊
  .single-part {
    color: white;
    transition: 0.4s ease;
    height: 40px;
    overflow: hidden;
    .title {
      position: relative;
      background-color: #000000;
      color: white;
      display: flex;
      justify-content: center;
      font-weight: 500;
      padding: 8px;
      cursor: pointer;
      &:hover {
        font-weight: 700;
        opacity: 0.8;
      }
      &::after {
        content: ">";
        position: absolute;
        right: 30px;
        font-weight: 500;
        transform: rotate(90deg);
        transition: 0.4s ease;
      }
      &:hover::after {
        font-weight: 900;
      }
    }

    // 子標題
    ul {
      text-align: center;
      font-size: ${({ theme }) => theme.font.XL};
      list-style: none;

      li {
        padding: 8px;
        &:hover {
          font-weight: 700;
          cursor: pointer;
        }
      }
      li:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.XinMedia.Grey};
      }
    }
  }

  // 點下去該標題後:
  .current-active {
    height: ${({ subLength }) => `calc(40px * ${subLength})`};

    .title {
      &::after {
        content: ">";
        transform: rotate(270deg);
        transition: 0.4s ease;
      }
    }
  }
`;
