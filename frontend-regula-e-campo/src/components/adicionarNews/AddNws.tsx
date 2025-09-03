"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import useCreStore from "@/stores/useCreStore";
import { useCheckCre } from "@/hooks/useCheckCre";

// Componente responsável por criar notícias, com upload, registro das imagens e seleção de principal por ID
export default function AddNws() {
  const router = useRouter();
  const cre = useCreStore((s) => s.cre);

  // Campos da notícia
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const creatorId = cre?.id || "";
  const [tag, setTag] = useState("");

  // Upload e fotos registradas
  type UploadedPhoto = { id: string; url: string };
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]); // fotos já registradas no backend
  const [mainPhotoId, setMainPhotoId] = useState<string>("");

  // Feedback
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Garante atualização do creator na store
  useCheckCre();

  // Registra a imagem no backend e retorna o par {id, url}
  async function registerPhoto(sourceUrl: string): Promise<UploadedPhoto> {
    // Garante o ID do creator, independente do timing do estado local
    const currentCreatorId = cre?.id || useCreStore.getState().cre?.id;
    if (!currentCreatorId) {
      throw new Error("Defina o Creator ID antes de enviar imagens.");
    }

    const payload = {
      source: sourceUrl,
      description: "imagem",
      creator_id: String(currentCreatorId),
    };

    const res = await fetch("https://localhost:3002/private/regPht", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(text || `Erro ao registrar foto (HTTP ${res.status})`);
    }

    const data = await res.json().catch(() => null as any);
    const id = (data && (data.photo_id || data.id || data.pht_id)) || "";
    if (!id) throw new Error("Registro de foto não retornou ID válido.");

    return { id, url: sourceUrl };
  }

  // Upload de imagem -> registra no backend imediatamente
  const handleUploadSuccess = async (results: any) => {
    try {
      const info = (results as any)?.info || {};
      const secureUrl: string = info.secure_url || info.url || "";
      if (!secureUrl) return;

      const photo = await registerPhoto(secureUrl);

      setUploadedPhotos((prev) => {
        const next = [...prev, photo];
        if (!mainPhotoId) setMainPhotoId(photo.id);
        return next;
      });
    } catch (e) {
      console.error("Erro ao processar upload/registro:", e);
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg || "Falha ao registrar imagem.");
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !text || !cre?.id || !tag) {
      setError(
        "Preencha os campos obrigatórios: título, texto, creator_id e tag."
      );
      return;
    }

    if (uploadedPhotos.length === 0) {
      setError("Envie pelo menos uma imagem pelo upload antes de criar a notícia.");
      return;
    }

    setSubmitting(true);
    try {
      // Prepara main_image e secondary_photos como IDs (string)
      const mainId = mainPhotoId || uploadedPhotos[0].id;
      const secondaryStr = uploadedPhotos
        .filter((p) => p.id !== mainId)
        .map((p) => p.id)
        .join(",");

      const resp = await fetch("https://localhost:3002/private/regNws", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title,
          text,
          subtitle,
          creator_id: String(cre?.id),
          tag,
          main_image: mainId,
          secondary_photos: secondaryStr,
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

  const effectiveMainId = mainPhotoId || uploadedPhotos[0]?.id || "";

  return (
    <main className="flex justify-center px-4 py-10 min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-2xl w-full max-w-2xl">
        <h1 className="mb-6 font-bold text-gray-800 text-2xl">Nova notícia</h1>

        {!cre && (
          <div className="bg-yellow-50 mb-4 p-3 rounded-lg text-yellow-800 text-sm">
            Dica: este formulário é destinado a contas do tipo Creator.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-sm">Título *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
              placeholder="Título da notícia"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Subtítulo</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
              placeholder="Subtítulo da notícia"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm">Texto *</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 w-full min-h-[160px]"
              placeholder="Conteúdo da notícia"
              required
            />
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <div>
              <label className="block mb-1 font-semibold text-sm">Creator ID *</label>
              <input
                type="text"
                value={cre?.id || ""}
                onChange={() => {}}
                readOnly
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                placeholder="ID do criador"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">Tag *</label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                placeholder="Ex.: 66f7..., etc. (ObjectId da tag)"
                required
              />
            </div>
          </div>

          {/* Upload de Imagens + Registro imediato */}
          <div className="gap-3 grid">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-sm">Imagens da notícia</label>
              <CldUploadButton
                className={`px-4 py-2 rounded-full font-semibold text-white ${
                  cre?.id
                    ? "bg-green-700 hover:bg-green-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                uploadPreset="CubicSite"
                options={{ sources: ["local", "url", "camera"], multiple: true }}
                onSuccess={handleUploadSuccess}
                disabled={!cre?.id}
              >
                Upload de imagem
              </CldUploadButton>
            </div>

            {uploadedPhotos.length > 0 && (
              <div className="gap-2 grid">
                <p className="text-gray-600 text-sm">
                  Imagens enviadas (clique para definir a principal)
                </p>
                <div className="gap-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                  {uploadedPhotos.map((p) => {
                    const isMain = effectiveMainId === p.id;
                    return (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setMainPhotoId(p.id)}
                        className={`relative border rounded-md overflow-hidden aspect-square ${
                          isMain ? "ring-2 ring-green-600 border-green-600" : "border-gray-300"
                        }`}
                        title={isMain ? "Imagem principal" : "Definir como principal"}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.url} alt="Imagem enviada" className="w-full h-full object-cover" />
                        {isMain && (
                          <span className="top-1 left-1 absolute bg-green-700 px-1 py-0.5 rounded text-[10px] text-white">
                            Principal
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <p className="text-gray-500 text-xs">
              As imagens enviadas via upload são registradas e os respectivos IDs
              são usados no cadastro da notícia. Envie ao menos uma imagem.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#2E7D32] hover:bg-[#27632a] disabled:opacity-60 px-5 py-2 rounded-full font-semibold text-white disabled:cursor-not-allowed"
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
