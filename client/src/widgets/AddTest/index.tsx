"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTest } from "./style";
import { AddQuestions } from "@/features/addQuestions";
import { Button } from "@mui/material";
import { HeaderTitle } from "../Header/style";
import { useActions } from "@/redux/hooks/useActions";
import { QuestionList } from "@/features/QuestionsList/QuestionsList";
import { useAppSelector } from "@/redux/hooks/hooks";
import { memo, useState } from "react";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import { useAddNewTestMutation } from "@/redux/api/testApi";
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [countQuestion, setCountQuestion] = useState(0);
  const [questionsArray, setQuestionsArray] = useState<QuestionType[] | []>([]);

  const { addTest, addQuestions, deleteAllQuestions } = useActions();

  const [addTestQuery, { isLoading, error, isError, status }] =
    useAddNewTestMutation<any>();
  console.log(status);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTest(data);
    addTestQuery({
      questions: questionsArray,
      icon: data.icon,
      description: data.description,
      name: data.name,
    });
    reset();
    deleteAllQuestions();
    setQuestionsArray([]);
  };
  const onSubmitQuestions: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const questionsData = {
      id: countQuestion,
      image: "",
      znamya: data.img,
      question: data.questions,
      correctAnswersIds: [data.correctAnswer],
      answers: [
        { id: 1, label: data.option1 },
        { id: 2, label: data.option2 },
        { id: 3, label: data.option3 },
        { id: 4, label: data.option4 },
      ],
    };

    setQuestionsArray([...questionsArray, questionsData]);
    setCountQuestion(countQuestion + 1);
    addQuestions(data);
  };

  return (
    <>
      <HeaderTitle>Добавте новый тест</HeaderTitle>
      <FormTest component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Название"
          variant="standard"
          {...register("name", { required: true })}
        />
        <TextField
          id="outlined-basic"
          label="Иконка"
          variant="standard"
          {...register("icon", { required: true })}
        />
        <TextField
          id="outlined-basic"
          label="Описание"
          variant="standard"
          {...register("description", { required: true })}
        />
        <AddQuestions
          register={register}
          handleSubmit={handleSubmit}
          onSubmitQuestions={onSubmitQuestions}
        />
        <QuestionList />
        {isLoading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <Button type="submit" variant="contained">
            Добавить тест
          </Button>
        )}
        {status === "uninitialized" ? (
          <></>
        ) : isError ? (
          <Alert severity="error">
            Что то пошло не так. Попробуйте ещё раз.
          </Alert>
        ) : (
          <Alert severity="success">Тест успешно добавлен</Alert>
        )}
      </FormTest>
    </>
  );
});
