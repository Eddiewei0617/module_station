import styled from "styled-components";
export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.screen.laptop};
  height: 100vh;
  margin: 0 auto;

  // 獅子頭LOGO
  .lion-logo {
    border: 1px solid ${({ theme }) => theme.XinMedia.Dark};
    border-radius: 50%;
    margin-bottom: 28px;
  }

  // 歡迎字樣
  p:not(.err-msg) {
    font-size: 50px;
    font-weight: 700;
    line-height: 65px;
  }

  // 密碼input大區塊
  .all-password {
    position: relative;
    .forgot-password {
      display: flex;
      align-items: center;
      position: absolute;
      right: -90px;
      top: 50%;
      transform: translateY(-50%);

      button {
        border: 0;
        background: transparent;
        font-size: ${({ theme }) => theme.font.M};
        font-weight: 600;
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.XinMedia.Dark};
          cursor: pointer;
        }
      }
    }
  }
`;
