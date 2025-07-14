'use client'

import React from 'react'
import Badge from '@/components/badge/Badge'
import Viewbutton from '../buttons/smButton/Viewbutton'
import ReactionButton from '../buttons/smButton/Reactionbutton'
import Sharebutton from '../buttons/socialButton/Sharebutton'
import NotaDoEspecialista from './Notaespecialista'

interface TextoProps {
  title: string
  subtitle: string
  imageUrl: string
  content: string
  views: number
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes" | "biodiversidade" | "pesquisa"
  publishedAt: string // novo campo
}

function TextoMobile({ title, subtitle, imageUrl, content, views, badgeType, publishedAt }: TextoMobileProps) {
  const data = new Date(publishedAt)
  const hoje = new Date()
  const diffMs = hoje.getTime() - data.getTime()
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  const formatado = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="flex flex-col px-4">
      {/* Topo: badge */}
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="space-x-2">
          <Badge type={badgeType} />
        </div>
      </div>

      {/* Título */}
      <div className="w-full text-left text-gray-900 font-extrabold text-[24px] mb-2">
        {title}
      </div>

      {/* Subtítulo */}
      <div className="w-full text-left text-gray-600 font-normal text-[16px] mb-6">
        {subtitle}
      </div>

      {/* Indicadores + Data */}
      <div className="flex flex-row w-full gap-2 items-center mb-6">
        <Viewbutton text={views.toString()} />

        <span className="ml-auto text-xs text-gray-500 whitespace-nowrap">
          {formatado} — há {dias === 0 ? 'hoje' : `${dias} dia${dias > 1 ? 's' : ''}`}
        </span>
      </div>

      <div className="w-full mb-6">
        <NotaDoEspecialista
          nome="Dr. João Ribeiro"
          imagemUrl="/images/joao.jpg"
          texto="Essa solução apresenta ótimos resultados no campo, especialmente em regiões com clima semiárido. Recomendamos atenção à aplicação na fase vegetativa."
          />
      </div>

      {/* Imagem */}
      <div className="w-full rounded-2xl overflow-hidden h-full relative mb-6">
        <img 
          src={imageUrl}
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Corpo */}
      <div className="w-full text-left text-gray-900 text-[18px] whitespace-pre-line">
        {content}
      </div>
    </div>
  )
}

export default TextoMobile