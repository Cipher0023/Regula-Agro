import { create } from "zustand";

export type LoginRole = "reader" | "creator" | "developer";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  imageUrl?: string | null;
}

interface SessionState {
  isLoggedIn: boolean;
  role: LoginRole | null;
  user: SessionUser | null;
  loginAs: (role: LoginRole, user: SessionUser) => void;
  logoutAll: () => void;
  setUserPartial: (user: Partial<SessionUser>) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  isLoggedIn: false,
  role: null,
  user: null,
  loginAs: (role, user) => set({ isLoggedIn: true, role, user }),
  logoutAll: () => set({ isLoggedIn: false, role: null, user: null }),
  setUserPartial: (user) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...user } : (user as SessionUser),
    })),
}));
