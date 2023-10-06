import { styled, css } from "styled-components";

export const ButtonNew = styled.button<{ flag: string }>`
  align-self: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  background-color: white;
  border: 2px solid rgb(48, 48, 48);
  border-radius: 10px;
  width: 90%;
  min-height: 40px;
  font-size: 16px;
  padding: 5px;
  text-align: start;

  ${(props: any) =>
    props.flag === "black" &&
    css`
      border: 2px solid rgb(48, 48, 48);
    `}
  ${(props: any) =>
    props.flag === "red" &&
    css`
      border: 3px solid red;
    `}
		${(props: any) =>
    props.flag === "green" &&
    css`
      border: 3px solid green;
    `}
`;
