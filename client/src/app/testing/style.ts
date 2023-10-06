import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-bottom: 17px;
`;

export const ContainerTests = styled.div`
  width: 92vw;
  margin: 90px 0px 17px 0px;
  padding-top: 20px;
  border-radius: 15px;
  border: solid 2px rgb(48, 48, 48);
  display: flex;
  flex-direction: column;
  z-index: 2;
  gap: 20px;
`;
export const LinkTest = styled(Link)`
  &:active {
    font-size: 17px;
  }
  &:hover {
    font-size: 19px;
  }
  height: 35px;
  align-items: center;
  align-self: center;
  font-size: 18px;
  color: black;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Description = styled.div`
  align-items: center;
  align-self: center;
  font-size: 14;
  width: 90%;
  color: rgb(66, 65, 65);
`;

export const Line = styled.div`
  margin: 10px;
  height: 1px;
  background-color: rgb(48, 48, 48);
`;
export const Test = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const P = styled.div``;
