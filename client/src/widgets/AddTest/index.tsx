"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormTest } from "./style";
import { AddQuestions } from "@/features/addQuestions";
import { Button } from "@mui/material";
import { HeaderTitle } from "../Header/style";
import { useActions } from "@/redux/hooks/useActions";
import { QuestionList } from "@/features/QuestionsList/QuestionsList";

type Inputs = {
  name: string;
  icon: string;
  description: string;
};

export default function TestForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { addTest, addQuestions } = useActions();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTest(data);
  };
  const onSubmitQuestions: SubmitHandler<Inputs> = (data) => {
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
        <Button type="submit" variant="contained">
          Добавить тест
        </Button>
      </FormTest>
    </>
  );
}
