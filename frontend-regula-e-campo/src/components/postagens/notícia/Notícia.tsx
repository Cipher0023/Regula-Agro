import React from 'react'
import Badge from '@/components/badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'
import ReactionButton from '@/components/buttons/smButton/Reactionbutton'

interface NotíciaProps {
  imageUrl: string;
  title: string;
  views: number;
  comments: number;
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa";
  daysAgo: number; // Novo campo
}

function Notícia({ imageUrl, title, views, comments, badgeType, daysAgo }: NotíciaProps) {
  return (
    <div className="rounded-2x1 overflow-hidden h-full flex flex-col space-y-3">
      
      <div className="relative rounded-2xl overflow-hidden h-full border border-gray-200">
        {/* Badge posicionado no canto superior esquerdo da imagem */}
        <div className="absolute top-2 left-2 z-10">
          <Badge type={badgeType} />
        </div>

        <img 
          src={imageUrl}
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Gradiente + texto por cima */}
        <div className="absolute bottom-0 w-full text-left text-white z-10">
          <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
            <div className="font-bold text-[24px]">
              {title}
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores + tempo de publicação */}
      <div className='flex gap-2 items-center'>
        <Viewbutton text={views.toString()} />
        <ReactionButton />
        <Commentbutton text={comments.toString()} />
        <span className="mr-auto text-sm text-gray-400 whitespace-nowrap">
          {daysAgo === 0 ? 'Hoje' : `${daysAgo} dia${daysAgo > 1 ? 's' : ''} atrás`}
        </span>
      </div>
    </div>
  )
}

export default Notícia