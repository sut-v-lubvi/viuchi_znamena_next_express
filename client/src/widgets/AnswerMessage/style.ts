import { styled } from "styled-components";

export const Wrapper = styled.div<{
  isCorrectAnswer: boolean;
  isAnswer: boolean;
}>`
  height: 25px;
  text-align: center;
  font-size: 16pt;
  font-weight: 500;
  transition: opacity 0.5s;
  opacity: ${({ isAnswer }) => (isAnswer ? "1" : "0")};
  color: ${({ isCorrectAnswer }) => (isCorrectAnswer ? "#66BB6A" : "#EF5350")};
`;
