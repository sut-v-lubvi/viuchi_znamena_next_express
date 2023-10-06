import { type } from "os";
import { useEffect, useState } from "react";
import LinearProgress from "../../../node_modules/@mui/material/LinearProgress/LinearProgress";
import Stack from "@mui/material/Stack";
import { Container } from "./style";
type Props = {
  questionTestId: number;
  numberQuestions: number;
};

export const LineProgress = ({ numberQuestions, questionTestId }: Props) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (questionTestId !== 0) {
      setProgress(progress + 100 / numberQuestions);
    }
  }, [questionTestId]);
  return (
    <Container>
      <LinearProgress
        color="inherit"
        variant="determinate"
        value={progress}
      ></LinearProgress>
    </Container>
  );
};
