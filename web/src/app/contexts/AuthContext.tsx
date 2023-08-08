import React, { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { toast } from "react-hot-toast";
import { SplashScreen } from "../../ui/components/SplashScreen";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );
    return Boolean(storedAccessToken);
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => userService.me(),
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();
    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error("Sua sessão expirou!");
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        signin,
        signout,
      }}
    >
      <SplashScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
