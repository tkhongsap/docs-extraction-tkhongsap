import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
    usage: number;
    limit: number;
  } | null;
  login: () => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: () => set({ 
    isAuthenticated: true, 
    user: {
      name: 'Somchai Jai-dee',
      email: 'somchai@example.com',
      usage: 45,
      limit: 100
    }
  }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
