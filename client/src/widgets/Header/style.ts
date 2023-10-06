import { styled, css } from "styled-components";

export const HeaderContainer = styled.div<{ $stateMenu: boolean }>`
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 50;
  padding: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.7s;
  ${({ $stateMenu }) =>
    $stateMenu ? `box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.5);` : ``};
`;
export const HeaderTitle = styled.div`
  position: relative;
  text-align: center;
`;
export const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-weight: 100;
  font-size: 32px;
  font-family: "izhitsa";
  letter-spacing: 4px;
`;
export const Red = styled.span`
  font-size: 32px;
  font-family: "izhitsa";
  color: red;
`;

export const FalseBlock = styled.div`
  width: 40px;
  height: 38px;
`;
