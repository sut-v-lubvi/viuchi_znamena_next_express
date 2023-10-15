"use client";
import { AnswerType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { ButtonStatus, getButtonStatus } from "../getButtonStatus/getButtonStatus";
import { ButtonNew } from "./style";
import { MouseEventHandler } from "react";


interface Props {
  isAnswer: boolean
  correctAnswersId: number
  answer: AnswerType
  onAnswer: (answerId: number) => MouseEventHandler<HTMLButtonElement>
}

export const AnswerOption = ({ isAnswer, correctAnswersId, answer, onAnswer }: Props) => {
  return (
    <ButtonNew
      disabled={isAnswer}
      status={getButtonStatus({ isAnswer, answerId: answer.id, correctAnswersId })}
      onClick={onAnswer(answer.id)}
    >
      {answer.label}
    </ButtonNew>
  )
}
