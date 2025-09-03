import { create } from "zustand";

// Representação do usuário autenticado
export interface Cre {
  id: string;
  name: string;
  email: string;
  image: string;
}

// Definição do estado e das ações do store
interface CreState {
  cre: Cre | null;
  setCre: (cre: Cre | null) => void;
  clearCre: () => void;
}

// Criação do store usando Zustand
const useCreStore = create<CreState>((set) => ({
  cre: null,
  setCre: (cre: Cre | null) => set({ cre }),
  clearCre: () => set({ cre: null }),
}));

export default useCreStore;
