"use client";

import { useEffect } from "react";
import { Container } from "./style";

export default function SettingsPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (!localStorage.getItem("password")) {
        const password: any = prompt("Введите пароль");
        if (password === "yaplakal2000") {
          localStorage.setItem("password", password);
        } else {
          location.reload();
        }
      }
    }
  }, []);

  return <Container></Container>;
}
