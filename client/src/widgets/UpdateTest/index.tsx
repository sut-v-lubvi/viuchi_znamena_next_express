"use client";
import { SubmitHandler } from "react-hook-form";
import { useActions } from "@/redux/hooks/useActions";
import { memo, useEffect, useState } from "react";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import {
  useGetCurrentTestQuery,
  useUpdateTestMutation,
} from "@/redux/api/testApi";
import AddTestForm, { Inputs } from "@/features/addTestForm";

interface Props {
  testId: string;
}
export type DataTestType = {
  name: string | undefined;
  icon: string | undefined;
  description: string | undefined;
  questions?: QuestionType[]
};
export default memo(function UpdateTestForm({ testId }: Props) {
  const { data, isSuccess } = useGetCurrentTestQuery(testId);

  const [updateQuery, { isLoading, error, isError, status }] =
    useUpdateTestMutation();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const payload = {
      id: testId,
      questions: data.questions.map(({ correctAnswer, ...item }) => ({
        ...item,
        correctAnswersIds: [Number(correctAnswer)]
      })),
      icon: data.icon,
      description: data.description,
      name: data.name,
    }

    console.log({ payload })

    updateQuery(payload);
  };

  return (
    <AddTestForm
      status={status}
      isLoading={isLoading}
      isError={isError}
      submit={onSubmit}
      textButton="Обновить тест"
      dataTest={data}
    />
  );
});
