'use client'

import { useState } from 'react'
import Footer from '@/components/footer/footer'
import TextoResponsive from '@/components/texto/TextoResponsivo'
import PropagandaWide from '@/components/propaganda/propagandaWide/PropagandaWide'
import ChatBox from '@/components/chat/ChatBox'
import BottomBarNoticiaMobile from '@/components/navbar/item/Bottombar'
import MobileChatSheet from '@/components/chat/MobileChatSheet'

interface PageProps {
  params: {
    slug: string
  }
}

export default function NewsPage({ params }: PageProps) {
  const [showComments, setShowComments] = useState(false)

  const mockNoticia = {
    title: "Disputa no Congresso: FPA Tenta Barrar Decreto que Dá Poder de Polícia à Funai",
    subtitle:
      "A Frente Parlamentar da Agropecuária quer derrubar decreto que amplia os poderes da Funai em terras indígenas.",
    imageUrl: "/trator.png",
    content: `O que Diz o Decreto?

O decreto permite que a Funai:

- Apreenda e destrua bens e equipamentos que forem usados em atividades ilegais dentro das terras indígenas;
- Feche e lacre estabelecimentos que estiverem funcionando de forma irregular nessas áreas;
- Expulse pessoas que ocupem terras indígenas sem permissão, impedindo novas invasões.

O governo federal argumenta que essas medidas são necessárias para garantir a proteção dos povos indígenas e evitar conflitos em áreas demarcadas. No entanto, setores do agronegócio temem que essa decisão possa gerar insegurança para produtores rurais, especialmente em casos onde há disputa pela posse da terra.

Por que a FPA é Contra?

A FPA acredita que dar esse tipo de poder à Funai pode gerar problemas jurídicos e conflitos no campo. Hoje, apenas a polícia e a Justiça podem tomar esse tipo de decisão. Com essa mudança, a Funai poderia agir diretamente, o que, segundo a FPA, pode prejudicar agricultores e pecuaristas.

O que Vai Acontecer Agora?

Os deputados da FPA querem que o projeto para cancelar o decreto seja votado rapidamente. Para isso, eles vão buscar apoio de outros parlamentares e pedir urgência na votação.

Esse debate promete ser intenso no Congresso Nacional, já que envolve questões como o direito à terra, a proteção dos povos indígenas e a segurança jurídica no campo.`,
    views: 225,
    badgeType: "culturas" as const,
  }

  return (
    <>
      {/* Container com padding lateral */}
      <div className="flex flex-col gap-y-12 w-full items-center pb-40">
        {/* Propaganda topo */}
        <div className="max-w-[1136px]">
          <PropagandaWide />
        </div>

        {/* Conteúdo principal */}
        <main className="flex flex-col max-w-[1136px] mx-auto">
          <div className="flex flex-row gap-10">
            <TextoResponsive
              title={mockNoticia.title}
              subtitle={mockNoticia.subtitle}
              imageUrl={mockNoticia.imageUrl}
              content={mockNoticia.content}
              views={mockNoticia.views}
              badgeType={mockNoticia.badgeType}
            />

            {/* Chat lateral (desktop apenas) */}
            <div className="max-w-[480px] flex-shrink-0 hidden md:flex">
              <ChatBox />
            </div>
          </div>
        </main>
      </div>

      {/* Bottom bar fixa no mobile */}
      <BottomBarNoticiaMobile onCommentsClick={() => setShowComments(true)} />

      {/* Sheet de comentários no mobile */}
      {showComments && <MobileChatSheet onClose={() => setShowComments(false)} />}

      <Footer />
    </>
  )
}
