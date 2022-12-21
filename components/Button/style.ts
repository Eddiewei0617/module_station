import styled from "styled-components";
export const BodySTY = styled.div<{ backgroundColor?: string }>`
  button {
    width: ${({ theme }) => `calc(${theme.screen.laptop} /3)`};
    background-color: ${({ theme }) => theme.XinMedia.Grey};
    color: white;
    font-size: ${({ theme }) => theme.font.XL};
    font-weight: 500;
    border: transparent;
    border-radius: 4px;
    margin: 8px auto;
    padding: 6px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.XinMedia.SofterGrey};
      color: ${({ theme }) => theme.XinMedia.Dark};
    }
  }
`;
