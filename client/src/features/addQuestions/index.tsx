"use client";

import TextField from "@mui/material/TextField";
import { ButtonQuestions, FormQuestions } from "./style";
import { HeaderTitle } from "@/widgets/Header/style";

type Inputs = {
  img: string;
  questions: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: number;
};

export const AddQuestions = ({
  register,
  onSubmitQuestions,
  handleSubmit,
}: any) => {
  return (
    <FormQuestions>
      <HeaderTitle>Добавте вопрос</HeaderTitle>
      <TextField
        id="1"
        label="Изображение"
        variant="standard"
        {...register("img", { required: true })}
      />
      <TextField
        id="2"
        label="Вопрос"
        variant="standard"
        {...register("questions", { required: true })}
      />
      <TextField
        id="3"
        label="Вариант ответа 1"
        variant="standard"
        {...register("option1", { required: true })}
      />
      <TextField
        id="4"
        label="Вариант ответа 2"
        variant="standard"
        {...register("option2", { required: true })}
      />
      <TextField
        id="5"
        label="Вариант ответа 3"
        variant="standard"
        {...register("option3", { required: true })}
      />
      <TextField
        id="6"
        label="Вариант ответа 4"
        variant="standard"
        {...register("option4", { required: true })}
      />
      <TextField
        id="7"
        label="Правильный ответ № "
        variant="standard"
        {...register("correctAnswer", { required: true })}
      />
      <ButtonQuestions
        onClick={handleSubmit(onSubmitQuestions)}
        variant="outlined"
      >
        Добавить вопрос
      </ButtonQuestions>
    </FormQuestions>
  );
};
