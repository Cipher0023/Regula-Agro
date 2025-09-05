import { create } from "zustand";

// Representação da notícia vinda da API
export interface News {
  news_id: string;
  title: string;
  text: string;
  creator_id: string;
  main_image: string;
  secondary_photos: string;
}

// Estado e ações do store de notícias
interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;

  // Mutators
  setNews: (items: News[]) => void;
  addNews: (item: News) => void;
  updateNews: (news_id: string, data: Partial<News>) => void;
  removeNews: (news_id: string) => void;
  clear: () => void;

  // Data fetching
  fetchNews: () => Promise<void>;
}

const useNwsStore = create<NewsState>((set, get) => ({
  news: [],
  loading: false,
  error: null,

  setNews: (items: News[]) => set({ news: items }),

  addNews: (item: News) =>
    set((state) => ({
      news: [item, ...state.news],
    })),

  updateNews: (news_id: string, data: Partial<News>) =>
    set((state) => ({
      news: state.news.map((n) =>
        n.news_id === news_id ? { ...n, ...data } : n
      ),
    })),

  removeNews: (news_id: string) =>
    set((state) => ({
      news: state.news.filter((n) => n.news_id !== news_id),
    })),

  clear: () => set({ news: [], loading: false, error: null }),

  fetchNews: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstNws");
      if (!res.ok) throw new Error(`Erro ao buscar notícias: ${res.status}`);
      const data: News[] = await res.json();
      set({ news: data, loading: false });
    } catch (e: any) {
      set({ error: e?.message ?? "Erro ao carregar notícias", loading: false });
    }
  },
}));

export default useNwsStore;
