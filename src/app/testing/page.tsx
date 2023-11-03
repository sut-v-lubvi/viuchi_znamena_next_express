"use client";
import { getTestList } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import { useEffect, useState } from "react";
import TestItem from "@/features/testItem";
import { useGetTestsQuery } from "@/redux/api/testApi";
import { redirect } from "next/navigation";
import { ITest } from "@/redux/api/types";

export type TestListT = {
  name: string;
  id: string;
  icon: string;
  description: string;
};
export type ITestWithoutQuestions = Omit<ITest, "questions">;

export default function TestsList() {
  const { data, error } = useGetTestsQuery();

  const [testsList, setTestList] = useState<any | null>(null);

  useEffect(() => {
    if (data) {
      setTestList(getTestList(data.data.tests));
    }
  }, [data]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      redirect("/auth/login");
    }
  }, []);

  return (
    <>
      {testsList &&
        testsList.map((e: any, index: number) => (
          <TestItem
            key={`${e.id}-${index}`}
            id={e.id}
            icon={e.icon}
            name={e.name}
            description={e.description}
          />
        ))}
    </>
  );
}
