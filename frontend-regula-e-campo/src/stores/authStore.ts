import { create } from "zustand";

export type AuthUser = {
  id: string;
  name: string;
  imageUrl?: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
  setUser: (user: Partial<AuthUser>) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  login: (user) => set({ isLoggedIn: true, user }),
  logout: () => set({ isLoggedIn: false, user: null }),
  setUser: (user) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...user } : (user as AuthUser),
    })),
}));
