/* eslint-disable no-useless-catch */
import axios, { AxiosResponse } from 'axios';
import { ReactNode, createContext, useContext, useReducer } from 'react';
import { AuthContextProps, AuthState } from './IAuthContext';
import { authReducer } from './ts/AuthReducer';

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  token: localStorage.getItem('token') || null,
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data: { email: string; password: string; token: string }) => {
    localStorage.setItem('token', data.token);
    dispatch({ type: 'LOGIN', payload: { email: data.email, token: data.token } });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const sendRequest = async (url: string, method: string, data: any): Promise<any> => {
    try {
      const response: AxiosResponse = await axios({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        login(data);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, sendRequest }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
