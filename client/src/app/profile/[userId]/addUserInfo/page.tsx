"use client";

import AddUserInfo from "@/features/addUserInfo";
import { useAuth } from "@/shared/hooks/useAuth";

interface Props {
  userId: string;
}

export default function UserInfo() {
  const { userId } = useAuth();
  return (
    <>
      <AddUserInfo userId={userId} />
    </>
  );
}
