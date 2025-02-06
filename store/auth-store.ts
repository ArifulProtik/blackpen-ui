/* eslint-disable no-unused-vars */
import { User } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthostoreState {
  isAuthenticated: boolean;
  token: string | null;
  User: User | null;
  isInitialized: boolean;
  setUser: (auth: { token: string; user: User }) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthostoreState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      User: null,
      token: null,
      isInitialized: false,
      signOut: () => set({ User: null, token: null, isAuthenticated: false }),
      setUser: (auth: { token: string; user: User }) =>
        set({ User: auth.user, token: auth.token, isAuthenticated: true }),
    }),
    {
      name: 'auth-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true;
        }
      },
    },
  ),
);
