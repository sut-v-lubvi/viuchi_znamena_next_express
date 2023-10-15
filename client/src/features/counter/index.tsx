import { type } from "os";
import { CounterBody, Digits, Timer } from "./style";
import { Time } from "./timer";
import { useCounter } from "@/shared/hooks/useCounter";
import { forwardRef, useEffect } from "react";

export interface CounterProps {
  ref: React.MutableRefObject<number>;
}

export const Counter = ({ ref }: CounterProps) => {

  let time: number = useCounter();

  useEffect(() => {
    ref.current = time
  }, [time, ref])

  return (
    <Timer>
      <Time time={time} />
    </Timer>
  );
}
