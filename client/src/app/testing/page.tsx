"use client";
import { getTestList } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import { useEffect, useState } from "react";
import TestItem from "@/features/testItem";
import { useGetTestsQuery } from "@/redux/api/testApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { redirect } from "next/navigation";

export type TestListT = {
  name: string;
  id: number;
  icon: string;
  description: string;
};

export default function TestsList() {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const { data, error } = useGetTestsQuery();
  console.log(data);
  const [testsList, setTestList] = useState<TestListT[] | null>(null);

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
        testsList.map((e) => (
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
