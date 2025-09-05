import { create } from "zustand";

// Representação da foto vinda da API
export interface Photo {
  photo_id: string;
  source: string;
  description: string;
  creator_id: string;
  created_at: string; // ISO string
}

// Estado e ações do store de fotos
interface PhotoState {
  photos: Photo[];
  loading: boolean;
  error: string | null;

  // Mutators
  setPhotos: (items: Photo[]) => void;
  addPhoto: (item: Photo) => void;
  updatePhoto: (photo_id: string, data: Partial<Photo>) => void;
  removePhoto: (photo_id: string) => void;
  clear: () => void;

  // Data fetching
  fetchPhotos: () => Promise<void>;
}

const usePhtStore = create<PhotoState>((set, get) => ({
  photos: [],
  loading: false,
  error: null,

  setPhotos: (items: Photo[]) => set({ photos: items }),

  addPhoto: (item: Photo) =>
    set((state) => ({
      photos: [item, ...state.photos],
    })),

  updatePhoto: (photo_id: string, data: Partial<Photo>) =>
    set((state) => ({
      photos: state.photos.map((p) =>
        p.photo_id === photo_id ? { ...p, ...data } : p
      ),
    })),

  removePhoto: (photo_id: string) =>
    set((state) => ({
      photos: state.photos.filter((p) => p.photo_id !== photo_id),
    })),

  clear: () => set({ photos: [], loading: false, error: null }),

  fetchPhotos: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstPht");
      if (!res.ok) throw new Error(`Erro ao buscar fotos: ${res.status}`);
      const data: Photo[] = await res.json();
      set({ photos: data, loading: false });
    } catch (e: any) {
      set({ error: e?.message ?? "Erro ao carregar fotos", loading: false });
    }
  },
}));

export default usePhtStore;
