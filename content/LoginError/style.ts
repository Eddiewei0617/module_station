import styled from "styled-components";
export const BodySTY = styled.div`
  display: flex;
  width: ${({ theme }) => `calc(${theme.screen.laptop} /3)`};
  background-color: #000000;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px auto;
  .err-msg {
    font-size: ${({ theme }) => theme.font.M};
    line-height: 50px;
  }
`;
