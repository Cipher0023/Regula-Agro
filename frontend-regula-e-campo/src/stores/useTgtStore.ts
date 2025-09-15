import { create } from "zustand";

// Representação de Tag vinda da API (flexível para diferentes backends)
export interface Tag {
  tag_id?: string;
  id?: string;
  name?: string;
  title?: string;
  // Campos extras variam por backend
  [key: string]: any;
}

// Estado e ações do store de tags
interface TagState {
  tags: Tag[];
  loading: boolean;
  error: string | null;

  // Mutators
  setTags: (items: Tag[]) => void;
  addTag: (item: Tag) => void;
  updateTag: (tagId: string, data: Partial<Tag>) => void;
  removeTag: (tagId: string) => void;
  clear: () => void;

  // Data fetching
  fetchTags: () => Promise<void>;
}

function getTagId(t: Tag): string {
  return String(t.tag_id || t.id || "");
}

const useTgtStore = create<TagState>((set, get) => ({
  tags: [],
  loading: false,
  error: null,

  setTags: (items: Tag[]) => set({ tags: items }),

  addTag: (item: Tag) =>
    set((state) => ({
      tags: [item, ...state.tags],
    })),

  updateTag: (tagId: string, data: Partial<Tag>) =>
    set((state) => ({
      tags: state.tags.map((t) =>
        getTagId(t) === tagId ? { ...t, ...data } : t
      ),
    })),

  removeTag: (tagId: string) =>
    set((state) => ({
      tags: state.tags.filter((t) => getTagId(t) !== tagId),
    })),

  clear: () => set({ tags: [], loading: false, error: null }),

  fetchTags: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstTgt");
      if (!res.ok) throw new Error(`Erro ao buscar tags: ${res.status}`);
      const data: Tag[] = await res.json();
      set({ tags: Array.isArray(data) ? data : [], loading: false });
    } catch (e: any) {
      set({ error: e?.message ?? "Erro ao carregar tags", loading: false });
    }
  },
}));

export default useTgtStore;
