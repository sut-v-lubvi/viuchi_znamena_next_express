"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonLog, Error, FormTest } from "./style";
import { Button } from "@mui/material";
import { HeaderTitle } from "../Header/style";
import { useRegisterMutation, useIsLoginMutation } from "@/redux/api/authApi";
import { error } from "console";
import { useEffect, useState } from "react";

export type LoginInput = {
  email: string;
  password: string;
};

export default function AuthForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<LoginInput>();

  const [addRegister, { isError, error }] = useRegisterMutation();
  const [addLogin, { data }] = useIsLoginMutation();
  const onSubmit: SubmitHandler<LoginInput> = (dataLog) => {
    addLogin(dataLog).unwrap();
  };
  const onSubmitRegister: SubmitHandler<LoginInput> = async (dataReg) => {
    addRegister(dataReg).unwrap();
  };
  useEffect(() => {
    if (error) {
      setErrorMessage(error.data.message);
      console.log(error.data.message);
    }
  }, [error]);
  return (
    <>
      <HeaderTitle>Войдите или зарегистрируйтесь</HeaderTitle>
      <FormTest component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={isError}
          id="login"
          label="email "
          variant="outlined"
          {...register("email", { required: "Поле обязательно к заполнению" })}
        />
        {errors.email && <Error>{errors?.email?.message || "Error"}</Error>}
        <TextField
          error={isError}
          id="register"
          label="password"
          variant="outlined"
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          })}
        />
        {errors.password && (
          <Error>{errors?.password?.message || "Error"}</Error>
        )}
        {error && <Error>{errorMessage}</Error>}
        <ButtonLog>
          <Button variant="contained" type="submit">
            Войти
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleSubmit(onSubmitRegister)}
          >
            Зарегестрироваться
          </Button>
        </ButtonLog>
      </FormTest>
    </>
  );
}
