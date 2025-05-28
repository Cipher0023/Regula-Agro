import React from 'react'
import Badge from '@/components/Badge/Badge'
import Viewbutton from '../buttons/smButton/Viewbutton'
import { FaWhatsapp } from 'react-icons/fa'
import WhatsButton from '../buttons/socialButton/WhatsButton'

function Texto() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="space-x-2">
          <Badge 
          text="Culturas"
          bgColor='bg-[#E8F5E9]'
          textColor='text-[#1B5E20]'/>
          <Badge text="Bioinsumos"/>
          <Badge text="Tecnologia"/>
          </div>
        <Viewbutton text = "106"/>
        </div>

      
      <div className="w-full text-left
        text-gray-900 font-extrabold text-[40px]">
        Disputa no Congresso: FPA Tenta Barrar Decreto que Dá Poder de Polícia à Funai
      </div>

      <div className="w-full text-left
        text-gray-600 font-regular text-[16px]">
        A Frente Parlamentar da Agropecuária (FPA) está apoiando um novo projeto na Câmara dos Deputados para cancelar o Decreto 12.373/2025, assinado pelo presidente Lula. Esse decreto dá à Funai (Fundação Nacional dos Povos Indígenas) poderes semelhantes aos da polícia dentro de terras indígenas.p

      </div>

      <div className="w-full">
        <WhatsButton/>
      </div>
      <div className="w-full rounded-2xl overflow-hidden h-full relative">
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
          />
      </div>
      <div className="w-full text-left
        text-gray-900 font-regular text-[18px]">
        O que Diz o Decreto?

O decreto permite que a Funai:

Apreenda e destrua bens e equipamentos que forem usados em atividades ilegais dentro das terras indígenas;

Feche e lacre estabelecimentos que estiverem funcionando de forma irregular nessas áreas;

Expulse pessoas que ocupem terras indígenas sem permissão, impedindo novas invasões.

O governo federal argumenta que essas medidas são necessárias para garantir a proteção dos povos indígenas e evitar conflitos em áreas demarcadas. No entanto, setores do agronegócio temem que essa decisão possa gerar insegurança para produtores rurais, especialmente em casos onde há disputa pela posse da terra.

Por que a FPA é Contra?

A FPA acredita que dar esse tipo de poder à Funai pode gerar problemas jurídicos e conflitos no campo. Hoje, apenas a polícia e a Justiça podem tomar esse tipo de decisão. Com essa mudança, a Funai poderia agir diretamente, o que, segundo a FPA, pode prejudicar agricultores e pecuaristas.

Além disso, há áreas onde a demarcação de terras indígenas ainda está em disputa. Caso a Funai tenha autoridade para agir antes de uma decisão final da Justiça, produtores rurais podem ser removidos de terras que ainda não tiveram sua posse totalmente definida.

O que Vai Acontecer Agora?

Os deputados da FPA querem que o projeto para cancelar o decreto seja votado rapidamente. Para isso, eles vão buscar apoio de outros parlamentares e pedir urgência na votação.

Esse debate promete ser intenso no Congresso Nacional, já que envolve questões como o direito à terra, a proteção dos povos indígenas e a segurança jurídica no campo. O resultado dessa votação poderá impactar tanto as comunidades indígenas quanto os produtores rurais e o agronegócio em geral.
      </div>

    </div>
  )
}

export default Texto
