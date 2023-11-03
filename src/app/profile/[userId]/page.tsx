"use client";

import { UserStatistics } from "@/features/userStatistics";

interface Props {
  params: {
    userId: string;
  };
}

export default function UserProfile({ params: { userId } }: Props) {
  console.log(userId);
  return <UserStatistics userId={userId} />;
}
