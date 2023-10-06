import { styled, css } from "styled-components";

export const CounterBody = styled.div`
  align-self: center;
  border-radius: 5px;
  border: solid 1px rgb(48, 48, 48);
  width: 20%;
  height: 25px;
`;

export const Timer = styled.div`
  width: 20%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: start;
  align-self: center;
`;

export const Digits = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  color: rgb(128, 128, 128);
`;
