"use client";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, DialogTitle } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import AuthForm from "@/widgets/AuthPage";

type Inputs = {
  name: string;
  icon: string;
  description: string;
};

export default function AuthPage() {
  return (
    <>
      <AuthForm />
    </>
  );
}
