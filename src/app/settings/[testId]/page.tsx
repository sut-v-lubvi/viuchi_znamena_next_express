"use client";

import UpdateTestForm from "@/widgets/UpdateTest";
interface Props {
  params: {
    testId: string;
  };
}
export default function UpdateTest({ params: { testId } }: Props) {
  return <UpdateTestForm testId={testId} />;
}
