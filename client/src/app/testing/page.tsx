"use client";
import { getTestList } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import {
  Container,
  ContainerTests,
  Description,
  Line,
  LinkTest,
  P,
  Test,
} from "./style";
import { useEffect, useState } from "react";
import { type } from "os";
import { Kruk } from "@/widgets/NavMenu/style";
import TestItem from "@/features/testItem";

export type TestListT = {
  name: string;
  id: number;
  icon: string;
  description: string;
};
export default function TestsList() {
  const [testsList, setTestList] = useState<TestListT[]>(getTestList());

  useEffect(() => {
    setTestList(getTestList());
  }, []);

  return (
    <>
      {testsList.map((e) => (
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
