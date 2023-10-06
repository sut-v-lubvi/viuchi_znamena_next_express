"use client";

import {
  FinishBody,
  Name,
  NavLine,
  Response,
  TestName,
  TestTime,
  Text,
  Title,
} from "./style";
import { Kruk } from "../NavMenu/style";
import { useActions } from "@/redux/hooks/useActions";
import { useTitle } from "@/shared/hooks/useTitle";
import NavIcons from "@/features/nawIcons";
import bass from "../../../public/bass.mp3";
import { memo } from "react";
import { useBass } from "@/shared/hooks/useBass";
import { currentTestState } from "@/redux/features/currentTestState";
import { Time } from "@/features/counter/timer";

export default memo(function Finish({
  id,
  name,
  correctAnswers,
  evaluation,
  errors,
  time,
}: currentTestState) {
  const { nullCorrectAnswers } = useActions();
  const title = useTitle(evaluation);
  useBass(evaluation, bass);
  console.log(time);
  return (
    <>
      <Title>{title}</Title>
      <FinishBody>
        <Name>
          <Kruk
            dangerouslySetInnerHTML={{ __html: '<span class="red">â</span>[5' }}
          ></Kruk>
          <TestName>{name}</TestName>
        </Name>
        <TestTime>
          <Text>Время:</Text>
          <Time time={time} />
        </TestTime>
        <Response $fg={true}>Правильных ответов: {correctAnswers} </Response>
        <Response $fg={false}>Ошибок: {errors}</Response>
      </FinishBody>
      <NavLine>
        <NavIcons nullCorrectAnswers={nullCorrectAnswers} id={Number(id)} />
      </NavLine>
    </>
  );
});
