import { create } from "zustand";

// Representação do usuário autenticado
export interface Rdr {
  id: string;
  name: string;
  email: string;
  image: string;
}

// Definição do estado e das ações do store
interface RdrState {
  reader: Rdr | null;
  setRdr: (reader: Rdr | null) => void;
  clearRdr: () => void;
}

// Criação do store usando Zustand
const useRdrStore = create<RdrState>((set) => ({
  reader: null,
  setRdr: (reader: Rdr | null) => set({ reader }),
  clearRdr: () => set({ reader: null }),
}));

export default useRdrStore;
