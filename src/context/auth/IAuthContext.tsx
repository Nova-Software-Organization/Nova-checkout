export interface AuthState {
    isAuthenticated: boolean;
    email: string | null;
    token: string | null;
}

export interface AuthAction {
    type: 'LOGIN' | 'LOGOUT';
    payload?: { email: string; token: string } | null;
}
  
export interface AuthContextProps {
state: AuthState;
login: (data: { email: string; password: string; token: string }) => void;
logout: () => void;
sendRequest: (url: string, method: string, data: any) => Promise<any>;
}