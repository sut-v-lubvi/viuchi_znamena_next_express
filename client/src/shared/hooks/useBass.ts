import { useEffect } from "react";

export const useBass = (evaluation: number, bass: any) => {
  useEffect(() => {
    const audioBass = new Audio(bass);
    if (evaluation >= 3) {
      audioBass.play();
      console.log("Звук");
      return () => {
        audioBass.pause();
      };
    }
  }, [evaluation]);
};
