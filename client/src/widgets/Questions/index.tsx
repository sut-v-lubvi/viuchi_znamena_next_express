"use client";
import {
  ButtonNext,
  ContainerQ,
  DivImg,
  DivQuestions,
  DivTitle,
  Line,
  None,
  Znamya,
} from "./style";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { useState } from "react";
import { AnswerOption } from "@/features/answerOptions";
import { useActions } from "@/redux/hooks/useActions";
import { Counter } from "@/features/counter";
import { useCounter } from "@/shared/hooks/useCounter";
import { LineProgress } from "@/features/lineProgress";
interface Props {
  currentQuestion: QuestionType;
  numberQuestions: number;
  questionTestId: number;
  setQuestionTestId: (questionTestId: number) => void;
}

export default function Questions({
  currentQuestion,
  numberQuestions,
  questionTestId,
  setQuestionTestId,
}: Props) {
  const [answerId, setAnswerId] = useState<number | null>(null);
  const isAnswer = typeof answerId === "number";
  const { addCorrectAnswers, addTestTime } = useActions();

  let time: number = useCounter();
  return (
    <>
      <Counter time={time} />
      <DivQuestions>
        <DivImg>
          <Znamya
            dangerouslySetInnerHTML={{ __html: currentQuestion.znamya }}
          ></Znamya>
        </DivImg>
        <DivTitle>
          <p>{currentQuestion.question}</p>
        </DivTitle>
        <Line></Line>
      </DivQuestions>
      <ContainerQ>
        {currentQuestion.answers.map((e) => {
          return (
            <AnswerOption
              key={e.id}
              answer={e}
              addCorrectAnswers={addCorrectAnswers}
              isAnswer={isAnswer}
              correctAnswersId={currentQuestion.correctAnswersIds[0]}
              setAnswerId={setAnswerId}
            />
          );
        })}
      </ContainerQ>
      {isAnswer ? (
        <ButtonNext
          onClick={() => {
            addTestTime(time);
            setQuestionTestId(questionTestId + 1);
            setAnswerId(null);
          }}
          disabled={!isAnswer}
        >
          Далее
        </ButtonNext>
      ) : (
        <None />
      )}
      <LineProgress
        questionTestId={questionTestId}
        numberQuestions={numberQuestions}
      />
    </>
  );
}
