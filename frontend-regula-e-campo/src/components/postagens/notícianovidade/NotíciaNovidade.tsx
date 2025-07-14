import React from 'react'
import Badge from '@/components/badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'
import ReactionButton from '@/components/buttons/smButton/Reactionbutton'

interface NoticiaNovidadeProps {
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
  daysAgo: number; // Novo campo
}

function NotíciaNovidade({ imageUrl, title, views, comments, badgeType, daysAgo }: NoticiaNovidadeProps) {
  return (
    <div className="flex flex-col overflow-hidden space-y-3">
      {/* Imagem com badge */}
      <div className="relative border border-gray-200 rounded-2xl overflow-hidden">
        <div className="absolute top-2 left-2 z-10">
          <Badge type={badgeType} />
        </div>
        <img 
          src={imageUrl}
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Texto + Botões */}
      <div className="flex flex-col space-y-4">
        <div className="text-left text-neutral-800 font-bold text-lg">
          {title}
        </div>

        <div className="flex items-center gap-2">
          <Viewbutton text={views.toString()} />
          <ReactionButton />
          <Commentbutton text={comments.toString()} />
          <span className="mr-auto text-sm text-gray-400 whitespace-nowrap">
            {daysAgo === 0 ? 'Hoje' : `${daysAgo} dia${daysAgo > 1 ? 's' : ''} atrás`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default NotíciaNovidade