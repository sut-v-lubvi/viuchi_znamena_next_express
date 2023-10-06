import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  QuestionType,
  TestType,
} from "../ui/BurgerButton/api/testsData/fakeApi/testsData";
import { useActions } from "@/redux/hooks/useActions";

export const useCurrentQuestions = (currentTest: TestType, testId: number) => {
  const router = useRouter();
  const [questionTestId, setQuestionTestId] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>(
    currentTest.questions[questionTestId]
  );
  const { addTestResult } = useActions();

  useEffect(() => {
    if (questionTestId > currentTest.questions.length - 1) {
      debugger;
      addTestResult({
        id: testId,
        name: currentTest.name,
        lengthTest: currentTest.questions.length,
      });
      router.push("/testing/[testId]/finish");
    } else {
      setCurrentQuestion(currentTest.questions[questionTestId]);
    }
  }, [questionTestId]);

  return [currentQuestion];
};
