import React, { createContext, useState } from "react";
import { useContextFactory } from "hooks";
import authService from "../services/auth.service";

const UserContext = createContext<UserContext>(null);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useUserContext = useContextFactory<UserContext>(UserContext);

const UserContextProvider: Component<ContextProviderProps> = ({ children }) => {
  const [isLoginIn, setLoginIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>(null);

  const signIn = (user: User, token: string, rememberMe: boolean) => {
    authService.setUser(user, rememberMe);
    authService.setToken(token);

    setUser(user);
    setLoginIn(true);
  };

  const logout = () => {
    authService.logout();

    setLoginIn(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ isLoginIn, user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
