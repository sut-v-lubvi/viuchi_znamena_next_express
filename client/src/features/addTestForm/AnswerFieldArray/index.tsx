import React, { FC } from "react";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { AddTestInputs } from "..";
import { Button } from "@mui/material";
import { InputOrSelect } from "./InputOrSelect";

interface AnswerFieldArrayProps {
  nestIndex: number;
  control: Control;
  register: UseFormRegister<AddTestInputs>;
}

export const AnswerFieldArray: FC<AnswerFieldArrayProps> = ({ nestIndex, control, register }) => {

  const { fields, remove, append } = useFieldArray({
    control,
    name: `questions.${nestIndex}.answers`
  });

  return (
    <>
      {fields.map((item, k) => {
        return (
          <InputOrSelect
            key={item.id}
            name={`questions.${nestIndex}.answers.${k}.label`}
            register={register}
            field={item}
            index={k}
            remove={remove}
          />
        );
      })}

      <Button
        type="button"
        variant="outlined"
        onClick={() =>
          append({ id: fields.length, })
        }
      >
        Добавить вариант ответа
      </Button >
    </>
  );
};
