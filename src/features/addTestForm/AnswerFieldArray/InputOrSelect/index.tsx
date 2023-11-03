import React, { FC, useState } from "react";
import { Control, Field, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { AddTestInputs } from "../..";
import { ANSWERS } from "../../QuestionFieldArray/constants";

interface InputOrSelectProps {
  name: string;
  control: Control;
  register: UseFormRegister<AddTestInputs>;
  field: Field
  index: number
  remove: UseFieldArrayRemove
}

export const InputOrSelect: FC<InputOrSelectProps> = ({ name, register, index, field, remove }) => {
  const [isInput, setIsInput] = useState(false)
  const [selectValue, setSelectValue] = useState(field.label)

  const { onChange, ...inputProps } = { ...register(name, { required: true }) }

  const handleChange = (e) => {
    console.log(e)
    setSelectValue(e.target.value)
    onChange(e)
  }

  return (
    <>
      <FormControlLabel control={
        <Switch checked={isInput} onChange={() => setIsInput(!isInput)} />
      } label="Ручной ввод" />
      {isInput && (
        <TextField
          key={index}
          id={field.id}
          label={`Вариант ответа ${index}`}
          variant="standard"
          {...register(name, { required: true })}
        />
      )}
      {!isInput && (
        <>
          <FormControl fullWidth>
            <InputLabel id="select-answer">{`Вариант ответа ${index}`}</InputLabel>
            <Select
              value={selectValue}
              labelId="select-answer"
              onChange={handleChange}
              key={index}
              id={field.id}
              label={`Вариант ответа ${index}`}
              {...inputProps}
            >
              {ANSWERS.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    selected={index === 0}
                    value={item}>
                    {item}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </>
      )}
      <Button variant="outlined" color="error" type="button" onClick={() => remove(index)}>
        Удалить вариант ответа
      </Button>
    </>
  );
};