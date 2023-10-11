"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { useRegisterMutation, useIsLoginMutation } from "@/redux/api/authApi";
import { error } from "console";
import { useEffect, useState } from "react";
import { useActions } from "@/redux/hooks/useActions";
import { useRouter } from "next/navigation";
import { HeaderTitle } from "@/widgets/Header/style";
import { ButtonLog, Error, FormTest } from "../login/style";

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export default function AuthForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<RegisterInput>();

  const router = useRouter();
  const [addRegister, { isError, error, isSuccess }] =
    useRegisterMutation<any>();

  const onSubmit: SubmitHandler<RegisterInput> = async (dataReg) => {
    addRegister(dataReg).unwrap();
  };
  useEffect(() => {
    if (error) {
      setErrorMessage(error.data.message);
      console.log(error.data.message);
    }
  }, [error]);
  if (isSuccess) {
    router.push("/auth/login");
  }
  return (
    <>
      <HeaderTitle>Зарегистрируйтесь</HeaderTitle>
      <FormTest component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={isError}
          id="name"
          label="name "
          variant="outlined"
          {...register("email", { required: "Поле обязательно к заполнению" })}
        />
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
          <Button variant="contained" color="warning" type="submit">
            Зарегестрироваться
          </Button>
        </ButtonLog>
      </FormTest>
    </>
  );
}
