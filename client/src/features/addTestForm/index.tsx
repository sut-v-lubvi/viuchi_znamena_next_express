"use client";
import TextField from "@mui/material/TextField";
import { useForm, FormProvider } from "react-hook-form";
import { FormTest } from "./style";
import { Button } from "@mui/material";
import { memo, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import { HeaderTitle } from "@/widgets/Header/style";
import { DataTestType } from "@/widgets/UpdateTest";
import { QuestionFieldArray } from "./QuestionFieldArray";

export type AddTestInputs = {
  name: string;
  icon: string;
  description: string;
  znamya: string;
  correctAnswer: number;
  questions: {
    correctAnswer: number
    question: string;
    answers: { label: string, id: number }[];
    znamya: string;
  }[]
};

type Props = {
  status: any;
  isError: boolean;
  isLoading: boolean;
  submit: any;
  textButton: string;
  dataTest?: DataTestType | null;
};

export default memo(function AddTestForm({
  status,
  isError,
  isLoading,
  submit,
  textButton,
  dataTest,
}: Props) {

  const methods = useForm<AddTestInputs>();

  useEffect(() => {
    if (!dataTest) {
      return
    }
    const initialData = {
      ...dataTest,
      questions: dataTest?.questions?.map(item => ({
        ...item,
        correctAnswer: item.correctAnswersIds[0],
      }))
    }

    if (dataTest) {
      methods.reset(initialData);
    }
  }, [dataTest, methods]);

  return (
    <>
      <HeaderTitle>Добавьте или обновите тест</HeaderTitle>
      <FormProvider {...methods} >
        <FormTest component="form" onSubmit={methods.handleSubmit(submit)}>
          <TextField
            id="outlined-basic"
            label="Название"
            variant="standard"
            {...methods.register("name", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Иконка"
            variant="standard"
            {...methods.register("icon", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="standard"
            {...methods.register("description", { required: true })}
          />

          <QuestionFieldArray control={methods.control} register={methods.register} />

          {isLoading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Button type="submit" variant="contained">
              {textButton}
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
      </FormProvider>
    </>
  );
});
