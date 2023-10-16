import { type } from "os";
import { CounterBody, Digits, Timer } from "./style";
import { Time } from "./timer";
import { useCounter } from "@/shared/hooks/useCounter";
import { forwardRef, useEffect } from "react";

export interface CounterProps {
  mRef: React.MutableRefObject<number>;
}

export const Counter = ({ mRef }: CounterProps) => {

  let time: number = useCounter();

  useEffect(() => {
    if (!mRef) {
      return
    }
    mRef.current = time
  }, [time, mRef])

  return (
    <Timer>
      <Time time={time} />
    </Timer>
  );
}
