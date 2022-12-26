import styled from "styled-components";
export const BodySTY = styled.div`
  border-top: 1px solid ${({ theme }) => theme.XinMedia.SofterGrey};
  margin-top: 60px;
  padding: 16px;
  width: 100vw;

  h1 {
    font-size: ${({ theme }) => theme.font.EX};
  }
  .info-block {
    width: 1080px;
    background-color: ${({ theme }) => theme.XinMedia.SoftestGrey};
    margin: 20px 0;
    padding: 40px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.XL};
  }
  .notice {
    font-weight: 600;
  }
`;
