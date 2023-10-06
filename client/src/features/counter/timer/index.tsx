import { type } from "os";
import { Digits, TimerContainer } from "./style";

type Props = {
  time: number;
};

export const Time = ({ time }: Props) => {
  return (
    <TimerContainer>
      <Digits>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Digits>
      <Digits>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</Digits>
    </TimerContainer>
  );
};
