"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonLog, FormTest } from "./style";
import { Button } from "@mui/material";
import { HeaderTitle } from "../Header/style";
import { useRegisterMutation } from "@/redux/api/api";

type Inputs = {
  email: string;
  password: string;
};

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [addRegister, { isError }] = useRegisterMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  const onSubmitRegister: SubmitHandler<Inputs> = async (data) => {
    addRegister(data).unwrap();
  };
  return (
    <>
      <HeaderTitle>Войдите или зарегистрируйтесь</HeaderTitle>
      <FormTest component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="login"
          label="email "
          variant="outlined"
          {...register("email", { required: true })}
        />
        <TextField
          id="register"
          label="password"
          variant="outlined"
          {...register("password", { required: true })}
        />
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
