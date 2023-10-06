import { dataTests } from "./testsData";

export const getTestList = () => {
  console.log("getTestList");
  let testListArr = [];
  for (let i = 0; i < dataTests.tests.length; i++) {
    testListArr.push({
      name: dataTests.tests[i].name,
      id: i,
      icon: dataTests.tests[i].icon,
      description: dataTests.tests[i].description,
    });
  }
  return testListArr;
};

export const getCurrentTest = (TestId: string) => {
  const test = dataTests.tests.find((item) => item.id === Number(TestId));
  if (test === undefined) {
    return {};
  } else {
    return test;
  }
};
