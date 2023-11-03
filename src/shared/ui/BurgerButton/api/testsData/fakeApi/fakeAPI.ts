import { ITest } from "@/redux/api/types";
import { TestType, dataTests } from "./testsData";
import { ITestWithoutQuestions } from "@/app/testing/page";

export const getTestList = (data: any) => {
  console.log("getTestList");
  let testListArr = [];
  for (let i = 0; i < data.length; i++) {
    testListArr.push({
      name: data[i].name,
      id: data[i]._id,
      icon: data[i].icon,
      description: data[i].description,
    });
  }
  console.log(testListArr);
  return testListArr;
};

export const getCurrentTest = (data: ITest[], TestId: string) => {
  const test = data[Number(TestId)];
  return test;
};
