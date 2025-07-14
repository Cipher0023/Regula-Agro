import React from 'react'
import Badge from '@/components/badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'
import Reactionbutton from '@/components/buttons/smButton/Reactionbutton'

interface NoticiaMobileProps {
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
  daysAgo: number; // Novo campo
}

function NotíciaMobile({ imageUrl, title, views, comments, badgeType, daysAgo }: NoticiaMobileProps) {
  return (
    <div className="h-auto flex flex-col w-full gap-y-2">
      
      <div className="flex flex-row space-x-2">
        <Badge type={badgeType} />
      </div>

      <div className="w-full text-left text-neutral-800 font-bold text-[16px]">
        {title}
      </div>

      <div className="h-51 rounded-2xl overflow-hidden border border-gray-200">
        <img 
          src={imageUrl}
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex items-center gap-2">
        <Viewbutton text={views.toString()} />
        <Reactionbutton />
        <Commentbutton text={comments.toString()} />
        <span className="ml-auto text-sm text-gray-600 whitespace-nowrap">
          {daysAgo === 0 ? 'Hoje' : `${daysAgo} dia${daysAgo > 1 ? 's' : ''} atrás`}
        </span>
      </div>
    </div>
  )
}

export default NotíciaMobile