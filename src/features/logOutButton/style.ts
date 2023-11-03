import { styled, css } from "styled-components";
import { IoIosLogOut } from "react-icons/io";

export const ButtonLog = styled(IoIosLogOut)`
  &:hover {
    cursor: pointer;
    width: 37px;
  }
  &:active {
    width: 34px;
  }
  width: 35px;
`;
