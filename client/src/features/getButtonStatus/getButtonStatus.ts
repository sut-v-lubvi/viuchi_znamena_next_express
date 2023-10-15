export enum ButtonStatus {
  Pending,
  Success,
  Wrong,
}

interface GetButtonStatusParams {
  isAnswer: boolean,
  answerId: number,
  correctAnswersId: number;
}
export const getButtonStatus = ({ isAnswer, answerId, correctAnswersId }: GetButtonStatusParams): ButtonStatus => {
  if (!isAnswer) {
    return ButtonStatus.Pending
  }

  if (answerId === correctAnswersId) {
    return ButtonStatus.Success;
  }
  return ButtonStatus.Wrong
};