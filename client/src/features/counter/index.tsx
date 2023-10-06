import { type } from "os";
import { CounterBody, Digits, Timer } from "./style";
import { Time } from "./timer";

type Props = {
  time: number;
};

export const Counter = ({ time }: Props) => {
  return (
    <Timer>
      <Time time={time} />
    </Timer>
  );
};
