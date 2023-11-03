"use client";

import { useEffect } from "react";

export default function Fake() {
  useEffect(() => {
    if (!localStorage.getItem("password")) {
      const password: any = prompt("Введите пароль");
      if (password === "yaplakal2000") {
        localStorage.setItem("password", password);
      } else {
        location.reload();
      }
    }
  }, []);
  return <></>;
}
