import { useEffect, useState } from "react";

export const useCounter: () => number = () => {
  const [time, setTime] = useState<number>(0);
  let interval: any = null;
  useEffect(() => {
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
};
