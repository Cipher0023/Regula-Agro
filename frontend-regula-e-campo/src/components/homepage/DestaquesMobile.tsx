import React from 'react'
import NotíciaMobile from '../postagens/notíciasmobile/NotíciasMobile'
import useNwsStore from '@/stores/useNwsStore'
import usePhtStore from '@/stores/usePhtStore'
import Link from 'next/link'

function DestaquesMobile() {
  const news = useNwsStore((s) => s.news)
  const loading = useNwsStore((s) => s.loading)
  const fetchNews = useNwsStore((s) => s.fetchNews)

  const photos = usePhtStore((s) => s.photos)
  const pLoading = usePhtStore((s) => s.loading)
  const fetchPhotos = usePhtStore((s) => s.fetchPhotos)

  React.useEffect(() => {
    if (!news.length && !loading) fetchNews()
  }, [news.length, loading, fetchNews])

  React.useEffect(() => {
    if (!photos.length && !pLoading) fetchPhotos()
  }, [photos.length, pLoading, fetchPhotos])

  const photoUrlFromId = (maybeIdOrUrl?: string) => {
    if (!maybeIdOrUrl) return 'trator.png'
    if (/^https?:\/\//.test(maybeIdOrUrl)) return maybeIdOrUrl
    const p = photos.find(x => x.photo_id === maybeIdOrUrl)
    return p?.source || 'trator.png'
  }

  if (loading || !news.length) return null

  return (
    <div className="flex flex-row w-full">
      <div className="space-y-6 w-full">
        {news.slice(0,5).map((n) => (
          <div key={n.news_id} className="h-[220px]">
            <Link href={`/noticia/${n.news_id}`} className="block h-full">
              <NotíciaMobile 
                imageUrl={photoUrlFromId((n as any).main_image)}
                title={n.title}
                views={0}
                comments={0}
                badgeType={'culturas'}
                daysAgo={0}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DestaquesMobile
