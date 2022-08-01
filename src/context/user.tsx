import React, { FC, useState, useEffect, useContext, createContext } from 'react';

import { getToken, setToken, clearToken } from 'src/utils';
import { postLogin } from 'src/services';
import { Alert } from 'react-native';

interface User {
  name: string;
  id: string;
}

interface CredentialsParams {
  email: string;
  password: string;
}

type ContextProps = {
  user: User | null | undefined;
  isFetchingUser: boolean;
  login: (credentials: CredentialsParams) => Promise<void>;
  logout: () => void;
};

const UserContext = createContext({} as ContextProps);

const useUser: () => ContextProps = () => useContext(UserContext);

const UserProvider: FC = ({ children }) => {
  const [isFetchingUser, setIsFetchingUser] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>();

  const fetchUser: () => Promise<void> = async () => {
    const token = await getToken();

    setIsFetchingUser(true);

    try {
      if (token) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetchingUser(false);
    }
  };

  const login: (credentials: CredentialsParams) => Promise<void> = async credentials => {
    try {
      const { token } = await postLogin(credentials);
      setUser({ name: credentials.email, id: 'jksd34' });

      setToken(token);
    } catch (error) {
      Alert.alert('Credenciais Inválidas', 'lorem ipsum');
      console.log(error);
    }
  };

  const logout: () => Promise<void> = async () => {
    try {
      setUser(null);
      await clearToken();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isFetchingUser,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
