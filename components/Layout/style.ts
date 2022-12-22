import styled from "styled-components";
export const BodySTY = styled.div`
  section {
    display: flex;

    .seperate {
      width: 1px;
      background-color: ${({ theme }) => theme.XinMedia.Grey};
      margin: 0 12px;
    }
  }
`;
