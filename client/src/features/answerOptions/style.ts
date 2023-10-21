import { styled, css } from "styled-components";
import { ButtonStatus } from "../getButtonStatus/getButtonStatus";

export const ButtonNew = styled.button<{ status?: ButtonStatus }>`
  align-self: center;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  font-size: 16px;
  padding: 15px 10px;
  text-align: center;
  transition: background-color 0.5s ease;

  ${({ status }) =>
    status === ButtonStatus.Pending &&
    css`
      background-color: #f3f3f3;
    `}
  ${({ status }) =>
    status === ButtonStatus.Wrong &&
    css`
      background-color: #ef5350;
    `}
		${({ status }) =>
    status === ButtonStatus.Success &&
    css`
      background-color: #66bb6a;
    `}
`;
