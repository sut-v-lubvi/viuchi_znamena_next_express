"use client";

import { Title } from "@/widgets/Finish/style";
import { Red } from "@/widgets/Header/style";
import { Description } from "./style";
import { useAuth } from "@/shared/hooks/useAuth";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks/hooks";
import { redirect } from "next/navigation";
import { useActions } from "@/redux/hooks/useActions";

export default memo(function Home() {
  const { setAuthenticated } = useActions();
  const { isAuthenticated } = useAppSelector((state) => state.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);
  console.log(isAuthenticated);

  if (isAuthenticated === false) {
    redirect("/auth/login");
  }
  return (
    <>
      <Title>
        <Red>Д</Red>обро пожаловать!
      </Title>
      <Description>
        Это приложение созданно с целью помочь в изучении знаменной нотации,
        посредством тестирования.
      </Description>
    </>
  );
});
