import { useEffect, useState } from "react";

export const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (id) {
      setUserId(id);
    }
    if (token) {
      setToken(token);
    }
  }, []);
  return { userId, token };
};
