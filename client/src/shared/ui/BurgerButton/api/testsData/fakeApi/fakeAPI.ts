import { TestType, dataTests } from "./testsData";

export const getTestList = (data: TestType[]) => {
  console.log("getTestList");
  let testListArr = [];
  for (let i = 0; i < data.length; i++) {
    testListArr.push({
      name: data[i].name,
      id: i,
      icon: data[i].icon,
      description: data[i].description,
    });
  }
  return testListArr;
};

export const getCurrentTest = (data: TestType[], TestId: string) => {
  const test = data[Number(TestId)];
  return test;
};
