"use client";
import { SubmitHandler } from "react-hook-form";
import { useActions } from "@/redux/hooks/useActions";
import { memo, useState } from "react";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { useAddNewTestMutation } from "@/redux/api/testApi";
import AddTestForm from "@/features/addTestForm";

type Inputs = {
  name: string;
  icon: string;
  description: string;
  img: string;
  correctAnswer: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  questions: string;
};

export default memo(function TestForm() {
  const { addTest, addQuestions, deleteAllQuestions } = useActions();

  const [addTestQuery, { isLoading, error, isError, status }] =
    useAddNewTestMutation<any>();
  const [questionsArray, setQuestionsArray] = useState<QuestionType[] | []>([]);
  console.log(status);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTest(data);
    addTestQuery({
      questions: questionsArray,
      icon: data.icon,
      description: data.description,
      name: data.name,
    });
    deleteAllQuestions();
    setQuestionsArray([]);
  };

  return (
    <>
      <AddTestForm
        status={status}
        isLoading={isLoading}
        isError={isError}
        submit={onSubmit}
        setQuestionsArray={setQuestionsArray}
        questionsArray={questionsArray}
        textButton="Добавить тест"
      />
    </>
  );
});
