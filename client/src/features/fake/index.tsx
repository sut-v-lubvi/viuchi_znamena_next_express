"use client";

import { memo, useEffect } from "react";

export default memo(function Fake() {
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
});
