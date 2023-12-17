import { AuthAction, AuthState } from "../IAuthContext";

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          email: action.payload?.email || null,
          token: action.payload?.token || null,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          email: null,
          token: null,
        };
      default:
        return state;
    }
};