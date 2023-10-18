"use client";

import { UserStatistics } from "@/features/userStatistics";
import { useEffect, useState } from "react";

interface Props {
  params: {
    userId: string;
  };
}

export default function UserProfile({ params: { userId } }: Props) {
  return (
    <>
      <UserStatistics userId={userId} />
    </>
  );
}
