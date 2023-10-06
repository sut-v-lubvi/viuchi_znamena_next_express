import { useEffect, useState } from "react";

export const useTitle = (evaluation: number) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (evaluation === 2) {
      setTitle("Попробуй ещё раз");
    }
    if (evaluation === 3) {
      setTitle("Не плохо");
    }
    if (evaluation === 4) {
      setTitle("А ты хорош");
    }
    if (evaluation === 5) {
      setTitle("Аминь!");
    }
  }, [evaluation]);
  return title;
};
