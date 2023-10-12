"use client";
import { getTestList } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import { useEffect, useState } from "react";
import TestItem from "@/features/testItem";
import { useGetTestsQuery } from "@/redux/api/testApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { redirect } from "next/navigation";
import { ITest } from "@/redux/api/types";
import { QuestionType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";

export type TestListT = {
  name: string;
  id: string;
  icon: string;
  description: string;
};
export type ITestWithoutQuestions = Omit<ITest, "questions">;

export default function TestsList() {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const { data, error } = useGetTestsQuery();
  console.log(data);
  const [testsList, setTestList] = useState<any | null>(null);

  useEffect(() => {
    if (data) {
      setTestList(getTestList(data));
    }
  }, [data]);
  if (!isAuthenticated) {
    redirect("/auth/login");
  }
  return (
    <>
      {testsList &&
        testsList.map((e: any) => (
          <TestItem
            key={e.id}
            id={e.id}
            icon={e.icon}
            name={e.name}
            description={e.description}
          />
        ))}
    </>
  );
}
