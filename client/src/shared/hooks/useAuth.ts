import { useCallback, useEffect, useState } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>();
  const [userId, setUserId] = useState<string | null>();

  const login: (jwtToken: string, id: string) => void = useCallback(
    (jwtToken, id) => {
      setToken(jwtToken);
      setUserId(id);

      localStorage.setItem(storageName, JSON.stringify({ token, userId }));
    },
    []
  );
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  //   useEffect(()=>{
  //     if(localStorage.getItem(storageName) !== null){
  //         const data = JSON.parse(localStorage.getItem(storageName))
  //     }
  //     if(data && data.token)

  //   },[])
  return { login, logout, token, userId };
};
