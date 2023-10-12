"use client";
import { useEffect, useState } from "react";
import { getCurrentTest } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import { type } from "os";
import {
  QuestionType,
  TestType,
} from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import Questions from "@/widgets/Questions";
import { useActions } from "@/redux/hooks/useActions";
import { useRouter } from "next/navigation";
import { useGetTestsQuery } from "@/redux/api/testApi";
import { ITest } from "@/redux/api/types";

interface Props {
  params: {
    testId: string;
  };
}

export default function Test({ params: { testId } }: Props) {
  const router = useRouter();
  const { data, error, isSuccess } = useGetTestsQuery();
  const [currentTest, setCurrentTest] = useState<ITest | null>(null);
  const [questionTestId, setQuestionTestId] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>();

  useEffect(() => {
    if (data) {
      setCurrentTest(getCurrentTest(data, testId));
    }
  }, [data, testId]);

  const { addTestResult, addTestTime } = useActions();
  useEffect(() => {
    if (currentTest) {
      if (questionTestId > currentTest.questions.length - 1) {
        addTestResult({
          id: testId,
          name: currentTest.name,
          lengthTest: currentTest.questions.length,
        });
        router.push("/testing/[testId]/finish");
      } else {
        setCurrentQuestion(currentTest.questions[questionTestId]);
      }
    }
  }, [questionTestId, currentTest]);
  if (currentTest && currentQuestion)
    return (
      <Questions
        numberQuestions={currentTest.questions.length}
        questionTestId={questionTestId}
        currentQuestion={currentQuestion}
        setQuestionTestId={setQuestionTestId}
      />
    );
}
