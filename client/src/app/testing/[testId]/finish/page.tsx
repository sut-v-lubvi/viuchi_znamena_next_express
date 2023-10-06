"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import Finish from "@/widgets/Finish";

export default function FinishContainer() {
  const { id, name, correctAnswers, errors, lengthTest, evaluation, time } =
    useAppSelector((state) => state.testSlice);

  return (
    <Finish
      time={time}
      evaluation={evaluation}
      lengthTest={lengthTest}
      name={name}
      correctAnswers={correctAnswers}
      errors={errors}
      id={id}
    />
  );
}
