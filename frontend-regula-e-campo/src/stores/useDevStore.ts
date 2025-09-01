import { create } from "zustand";

// Representação do usuário autenticado
export interface Dev {
  id: string;
  name: string;
  email: string;
}

// Definição do estado e das ações do store
interface DevState {
  dev: Dev | null;
  setDev: (dev: Dev | null) => void;
  clearDev: () => void;
}

// Criação do store usando Zustand
const useDevStore = create<DevState>((set) => ({
  dev: null,
  setDev: (dev: Dev | null) => set({ dev }),
  clearDev: () => set({ dev: null }),
}));

export default useDevStore;
