import React, { FC } from "react";
import { Control, UseFormRegister, UseFormGetValues, useFieldArray, UseFormSetValue, useFormContext } from "react-hook-form";
import { AnswerFieldArray } from "../AnswerFieldArray";
import { AddTestInputs } from "..";
import { FormQuestions, Preview } from "@/features/addQuestions/style";
import { HeaderTitle } from "@/widgets/Header/style";
import { Button, TextField } from "@mui/material";

interface QuestionFieldArray { control: Control, register: UseFormRegister<AddTestInputs>, setValue: UseFormSetValue<AddTestInputs>, getValues: UseFormGetValues<AddTestInputs> }

export const QuestionFieldArray: FC<QuestionFieldArray> = ({ control, register, setValue, getValues }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions"
  });

  const { watch } = useFormContext()
  const questions = watch(`questions`)

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <FormQuestions key={item.id}>
              <HeaderTitle>Вопрос № {index + 1}</HeaderTitle>
              <Preview dangerouslySetInnerHTML={{ __html: questions[index].znamya }} />
              <TextField
                id="1"
                label="Изображение"
                variant="standard"
                {...register(`questions.${index}.znamya`, { required: true })}
              />
              <TextField
                id="2"
                label="Вопрос"
                variant="standard"
                {...register(`questions.${index}.question`, { required: true })}
              />

              <AnswerFieldArray nestIndex={index} {...{ control, register }} />

              <TextField
                id="7"
                label="Правильный ответ № "
                variant="standard"
                {...register(`questions.${index}.correctAnswer`, { required: true })}
              />

              <Button type="button" variant="contained" color="error" onClick={() => remove(index)}>
                Удалить вопрос
              </Button>
            </FormQuestions>
          );
        })}
      </ul>

      <section>
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            append({ id: fields.length });
          }}
        >
          Добавить вопрос
        </Button>
      </section>
    </>
  );
}