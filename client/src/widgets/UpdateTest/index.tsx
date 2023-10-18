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
};
export default memo(function UpdateTestForm({ testId }: Props) {
  const [questionsArray, setQuestionsArray] = useState<QuestionType[] | []>([]);
  const { addQuestions, deleteAllQuestions, addQuestionsCurrentTest } =
    useActions();
  const { data, isSuccess } = useGetCurrentTestQuery(testId);
  const [dataTest, setDataTest] = useState<DataTestType | null>(null);

  useEffect(() => {
    setDataTest({
      name: data?.name,
      icon: data?.icon,
      description: data?.description,
    });
    if (isSuccess) {
      addQuestionsCurrentTest(data.questions);
    }
  }, [data, isSuccess, addQuestionsCurrentTest]);
  const [updateQuery, { isLoading, error, isError, status }] =
    useUpdateTestMutation();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // addTest(data);
    updateQuery({
      id: testId,
      questions: questionsArray,
      icon: data.icon,
      description: data.description,
      name: data.name,
    });
    deleteAllQuestions();
    setQuestionsArray([]);
  };
  console.log(questionsArray);
  return (
    <>
      <AddTestForm
        status={status}
        isLoading={isLoading}
        isError={isError}
        submit={onSubmit}
        setQuestionsArray={setQuestionsArray}
        questionsArray={questionsArray}
        textButton="Обновить тест"
        dataTest={dataTest}
      />
    </>
  );
});
