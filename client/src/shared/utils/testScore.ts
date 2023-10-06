export const testScore = (correctAnswers: number, lengthTest: number) => {
  if (correctAnswers < lengthTest / 2) return 2;

  if (correctAnswers > lengthTest / 2 && correctAnswers < lengthTest / 1.5)
    return 3;

  if (correctAnswers > lengthTest / 1.5 && correctAnswers < lengthTest)
    return 4;

  if (correctAnswers === lengthTest) return 5;
  return 0;
};
