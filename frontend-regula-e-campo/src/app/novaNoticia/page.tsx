"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/sessionStore";

export default function NovaNoticiaPage() {
  const router = useRouter();
  const role = useSessionStore((s) => s.role);
  const sessionUser = useSessionStore((s) => s.user);

  // Estados do formulário
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [tag, setTag] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [secondaryPhotosRaw, setSecondaryPhotosRaw] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Prefill creator_id quando sessão for de creator
  useEffect(() => {
    if (role === "creator" && sessionUser?.id) {
      setCreatorId(String(sessionUser.id));
    }
  }, [role, sessionUser?.id]);

  const secondaryPhotos = useMemo(() => {
    return secondaryPhotosRaw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }, [secondaryPhotosRaw]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !text || !creatorId || !tag) {
      setError("Preencha os campos obrigatórios: título, texto, creator_id e tag.");
      return;
    }

    setSubmitting(true);
    try {
      const resp = await fetch("https://localhost:3002/private/regNws", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title,
          text,
          subtitle,
          creator_id: creatorId,
          tag,
          main_image: mainImage,
          secondary_photos: secondaryPhotos,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        throw new Error(data?.message || "Erro ao registrar notícia");
      }

      setSuccess("Notícia criada com sucesso!");
      // Redireciona após pequeno delay
      setTimeout(() => {
        router.push("/");
      }, 800);
    } catch (err: any) {
      setError(err?.message || "Erro inesperado ao criar notícia");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Nova notícia</h1>

        {role !== "creator" && (
          <div className="mb-4 p-3 rounded-lg bg-yellow-50 text-yellow-800 text-sm">
            Dica: este formulário é destinado a contas do tipo Creator.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Título *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Título da notícia"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Subtítulo</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Subtítulo da notícia"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Texto *</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[160px] border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Conteúdo da notícia"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Creator ID *</label>
              <input
                type="text"
                value={creatorId}
                onChange={(e) => setCreatorId(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="ID do criador"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Tag *</label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Ex.: agricultura, pesquisa, etc."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Imagem principal (URL)</label>
            <input
              type="url"
              value={mainImage}
              onChange={(e) => setMainImage(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Fotos secundárias (URLs separadas por vírgula)</label>
            <textarea
              value={secondaryPhotosRaw}
              onChange={(e) => setSecondaryPhotosRaw(e.target.value)}
              className="w-full min-h-[80px] border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="https://exemplo.com/foto1.jpg, https://exemplo.com/foto2.jpg"
            />
            {secondaryPhotos.length > 0 && (
              <p className="mt-1 text-xs text-gray-500">
                {secondaryPhotos.length} URL(s) detectada(s)
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#2E7D32] hover:bg-[#27632a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full px-5 py-2"
            >
              {submitting ? "Enviando..." : "Criar notícia"}
            </button>
            {error && <span className="text-red-600 text-sm">{error}</span>}
            {success && <span className="text-green-700 text-sm">{success}</span>}
          </div>
        </form>
      </div>
    </main>
  );
}
