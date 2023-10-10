"use client";
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
