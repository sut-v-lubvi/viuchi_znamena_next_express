import { styled } from "styled-components";

export const Znamya = styled.div`
  text-align: center;
  font-family: "znamenna";
  font-size: 120px;
  height: auto;
  align-self: center;
`;

export const DivImg = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  align-self: center;
`;
export const DivQuestions = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivTitle = styled.div`
  margin: 0px auto;
  text-align: center;
  font-size: 22px;
  height: auto;
`;
export const ContainerQ = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  gap: 20px;
`;

export const InputT = styled.input`
  display: block;
  border-radius: 50%;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;
export const Line = styled.div`
  margin: 10px;
  margin-top: 20px;
  height: 2px;
  background-color: rgb(128, 128, 128);
`;
export const None = styled.div`
  width: 90%;
  height: 40px;
  align-self: center;
`;
export const ButtonNext = styled.button`
  &:active {
    transform: translateY(1.5px);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s;
  }
  font-size: 14px;
  color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(48, 48, 48);
  width: 90%;
  height: 40px;
  font-size: 15px;
  border-radius: 10px;
  align-self: center;
`;
export const ButtonCont = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;
