"use client";

import { useActions } from "@/redux/hooks/useActions";
import { ButtonLog } from "./style";
import { redirect } from "next/navigation";

const LogoutButton: React.FC = () => {
  const { logout } = useActions();
  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    redirect("/auth/login");
  };

  return <ButtonLog onClick={handleLogout} />;
};

export default LogoutButton;
