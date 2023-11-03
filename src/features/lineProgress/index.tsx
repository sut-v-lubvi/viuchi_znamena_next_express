import { type } from "os";
import { memo, useEffect, useRef, useState } from "react";
import LinearProgress from "../../../node_modules/@mui/material/LinearProgress/LinearProgress";
import Stack from "@mui/material/Stack";
import { Container } from "./style";
type Props = {
  questionTestId: number;
  numberQuestions: number;
};

export default memo(function LineProgress({
  numberQuestions,
  questionTestId,
}: Props) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    if (questionTestId !== 0) {
      setProgress(ref.current + 100 / numberQuestions);
      ref.current = ref.current + 100 / numberQuestions;
    }
  }, [questionTestId, numberQuestions]);
  return (
    <Container>
      <LinearProgress
        color="inherit"
        variant="determinate"
        value={progress}
      ></LinearProgress>
    </Container>
  );
});
