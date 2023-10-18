"use client";

import { UserStatistics } from "@/features/userStatistics";
import { useEffect, useState } from "react";

export type StatisticsType = {
  testId: number;
  userId: number;
  name: string;
  correctAnswers: number;
  errorAnswers: number;
};
export default function Profile() {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  return (
    <>
      <UserStatistics userId={userId} />
    </>
  );
}
