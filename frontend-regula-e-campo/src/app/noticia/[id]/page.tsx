"use client"

import { useEffect, useMemo, useState } from "react"
import TextoResponsive from "@/components/texto/TextoResponsivo"
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide"
import ChatBox from "@/components/chat/ChatBox"
import BottomBarNoticiaMobile from "@/components/navbar/item/Bottombar"
import MobileChatSheet from "@/components/chat/MobileChatSheet"
import useNwsStore from "@/stores/useNwsStore"
import usePhtStore from "@/stores/usePhtStore"
import { useParams } from "next/navigation"

export default function NoticiaByIdPage() {
  const [showComments, setShowComments] = useState(false)
  const params = useParams<{ id: string }>()
  const id = params?.id

  const news = useNwsStore((s) => s.news)
  const loading = useNwsStore((s) => s.loading)
  const fetchNews = useNwsStore((s) => s.fetchNews)
  const addNews = useNwsStore((s) => s.addNews)

  // Garante que a lista esteja carregada (AppHydrator já tenta, mas ficamos a prova de falhas)
  useEffect(() => {
    if (!news.length && !loading) {
      fetchNews()
    }
  }, [news.length, loading, fetchNews])

  const noticia = useMemo(() => news.find((n) => n.news_id === id), [news, id])
  const photos = usePhtStore((s) => s.photos)

  // Fallback: tenta buscar individualmente por ID caso não esteja na lista
  useEffect(() => {
    let cancelled = false
    const run = async () => {
      if (!noticia && !loading) {
        try {
          const res = await fetch(
            `http://localhost:3001/public/fndNws?news_id=${encodeURIComponent(id as string)}`
          )
          if (!cancelled && res.ok) {
            const data = await res.json()
            if (data) {
              addNews(data)
            }
          }
        } catch (e) {
          // Silencia erro de fallback para não quebrar UX
        }
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [noticia, loading, id, addNews])

  if (!noticia) {
    return (
      <div className="flex flex-col pt-10 w-full items-center">
        <div className="pb-10 flex justify-center items-center">
          <PropagandaWide />
        </div>
        <main className="flex flex-col max-w-[1136px] mx-auto">
          <div className="text-neutral-600">Carregando notícia...</div>
        </main>
      </div>
    )
  }

  // Mapeia campos do store para o componente visual
  // Resolve imagem principal via main_photo_id -> store de fotos
  const mainPhotoId = (noticia as any)?.main_photo_id || (noticia as any)?.main_image || "";
  const mainPhoto = photos.find((p) => p.photo_id === mainPhotoId);

  const ui = {
    title: noticia.title || "Sem título",
    subtitle: "",
    imageUrl: mainPhoto?.source || "/trator.png",
    content: noticia.text || "",
    views: 0,
    badgeType: "culturas" as const,
  }

  return (
    <>
      {/* Container com padding lateral */}
      <div className="flex flex-col pt-10 w-full items-center">
        {/* Propaganda topo */}
        <div className="pb-10 flex justify-center items-center">
          <PropagandaWide />
        </div>

        {/* Conteúdo principal */}
        <main className="flex flex-col max-w-[1136px] mx-auto">
          <div className="flex flex-row gap-10">
            <TextoResponsive
              title={ui.title}
              subtitle={ui.subtitle}
              imageUrl={ui.imageUrl}
              content={ui.content}
              views={ui.views}
              badgeType={ui.badgeType}
            />

            {/* Chat lateral (desktop apenas) */}
            <div className="w-full max-w-[420px] flex-shrink-0 hidden md:flex">
              <ChatBox />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom bar fixa no mobile */}
      <BottomBarNoticiaMobile onCommentsClick={() => setShowComments(true)} />

      {/* Sheet de comentários no mobile */}
      {showComments && <MobileChatSheet onClose={() => setShowComments(false)} />}
    </>
  )
}
