import React from 'react'
import Badge from '@/components/badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'
import ReactionButton from '@/components/buttons/smButton/Reactionbutton'

interface NoticiaSecundariaProps {
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
  daysAgo: number; // Novo campo
}

function NotíciaSecundária({ imageUrl, title, views, comments, badgeType, daysAgo }: NoticiaSecundariaProps) {
  return (
    <div className="h-auto flex flex-row overflow-hidden space-x-3">
      <div className='flex-1 relative border border-gray-200 rounded-2xl overflow-hidden h-full'>
        <div className="absolute top-2 left-2">
          <Badge type={badgeType} />
        </div>
        <img 
          src={imageUrl}
          alt="imagem do post" 
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {/* Título */}
        <div className='text-left text-neutral-800 font-bold text-lg'>
          {title}
        </div>

        {/* Tempo de publicação */}
        <div className="text-sm text-gray-400 mb-6">
          {daysAgo === 0 ? 'Hoje' : `${daysAgo} dia${daysAgo > 1 ? 's' : ''} atrás`}
        </div>

        {/* Botões */}
        <div className='flex gap-2'>
          <Viewbutton text={views.toString()} />
          <ReactionButton />
          <Commentbutton text={comments.toString()} />
        </div>
      </div>
    </div>
  )
}

export default NotíciaSecundária