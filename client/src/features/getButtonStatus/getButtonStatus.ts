export enum ButtonStatus {
  Pending,
  Success,
  Wrong,
}

export const getButtonStatus = (answerId: number | null, correctAnswersId: number): ButtonStatus => {
  if (answerId === null) return ButtonStatus.Pending

  if (answerId === correctAnswersId) {
    return ButtonStatus.Success;
  }
  return ButtonStatus.Wrong
};