import { create } from "zustand";

// Representação do usuário autenticado
export interface User {
  id: string;
  name: string;
  email: string;
}

// Definição do estado e das ações do store
interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

// Criação do store usando Zustand
const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
