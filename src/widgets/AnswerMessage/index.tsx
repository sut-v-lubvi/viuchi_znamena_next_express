import React, { FC } from "react";
import { Wrapper } from "./style";
import { getRandomInt } from "@/shared/utils/getRandomInt";

interface AnswerMessageProps {
  isAnswer: boolean;
  isCorrectAnswer: boolean;
}

const SUCCESS_TEXT = [
  "Верно! 👍",
  "Молодец! 🤩",
  "Отлично! 👌",
  "Превосходно! 🙌",
  "Ты справляешься! 💪",
  "Очень хорошо! 😎",
  "Все так! ❤️",
];

const FAIL_TEXT = [
  "Неверно! 😟",
  "Увы, это не так 😐",
  "Ошибка 😢",
  "Это фиаско, братан 😬",
  "Нет, неправильно 😳",
];

export const AnswerMessage: FC<AnswerMessageProps> = ({
  isAnswer,
  isCorrectAnswer,
}) => {
  return (
    <Wrapper isAnswer={isAnswer} isCorrectAnswer={isCorrectAnswer}>
      {isAnswer && isCorrectAnswer && SUCCESS_TEXT[getRandomInt(6)]}
      {isAnswer && !isCorrectAnswer && FAIL_TEXT[getRandomInt(4)]}
    </Wrapper>
  );
};
