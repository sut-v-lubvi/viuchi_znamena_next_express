"use client";
import { AnswerType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { getButtonStatus } from "../getButtonStatus/getButtonStatus";
import { ButtonNew } from "./style";
import { useState } from "react";
import { useActions } from "@/redux/hooks/useActions";
import { useAppSelector } from "@/redux/hooks/hooks";
import { checkingResponse } from "@/shared/utils/checkingResponse";


interface Props  {
    isAnswer: boolean 
    correctAnswersId:number
    answer:AnswerType
    setAnswerId:(id:number)=> void
    addCorrectAnswers:()=>void
}

export const AnswerOption = ({isAnswer,correctAnswersId,answer, setAnswerId,addCorrectAnswers}:Props)=>{

    return(
        <ButtonNew
            disabled={isAnswer}
            flag={
              isAnswer
                ? getButtonStatus(answer.id, correctAnswersId)
                : "black"
            }
            onClick={() => {
               checkingResponse(answer.id, correctAnswersId, addCorrectAnswers )
              setAnswerId(answer.id);
            }}
          >
            {answer.label}
          </ButtonNew>
    )
}
