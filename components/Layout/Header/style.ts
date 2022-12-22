import styled from "styled-components";
export const BodySTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.XinMedia.SofterGrey};
  z-index: 5;

  // Header左方功能列
  .left-side {
    display: flex;
    align-items: center;

    .lion-logo {
      height: 50px;
      border: 1px solid ${({ theme }) => theme.XinMedia.Dark};
      border-radius: 50%;
      margin: 0 16px;
    }

    p {
      font-size: ${({ theme }) => theme.font.XXL};
      font-weight: 600;
    }
  }

  // Header右方功能列
  .right-side {
    display: flex;
    align-items: center;
    margin-right: 16px;

    button,
    .member-name {
      margin: 0 8px;
    }

    button {
      position: relative;
      min-width: 50px;
      padding: 6px;
      border: none;
      background: transparent;
      &:hover {
        background-color: #000000;
        color: white;
        cursor: pointer;

        .notification-num {
          color: #000000;
          background-color: white;
        }
      }

      // 通知小鈴鐺上面的數字
      .notification-num {
        position: absolute;
        display: flex;
        background-color: red;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        justify-content: center;
        align-items: center;
        right: 0;
        top: 0;
        background-color: #000000;
        color: white;
      }
    }

    // 管理者名字
    .member-name {
      display: flex;
      align-items: center;
      cursor: pointer;
      &::after {
        content: "‣";
        font-size: 30px;
        margin-left: 4px;
        transform: rotate(90deg);
      }
      &:hover {
        border-bottom: 2px solid #000000;
      }
    }
  }
`;
