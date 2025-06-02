import React from 'react'
import Badge from '@/components/Badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'

function PostSearch() {
  return (
    <div className="rounded-2x1 h-full flex flex-col space-y-3 max-w-[944px]">

      <div className="flex flex-row space-x-2">
        <Badge 
        text="Culturas"
        bgColor='bg-[#E8F5E9]'
        textColor='text-[#1B5E20]'/>

        <Badge text="Bioinsumos"/>
      </div>

      <div className='flex flex-row gap-6 h-auto'>
        
        <div className="w-full max-w-[368px] h-full max-h-[207px] overflow-hidden rounded-2xl">
          <img 
            src="/trator.png"
            alt="imagem do post" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className='flex flex-col gap-2 h-auto flex-1'>
          <div className="w-full text-left
          text-gray-900 font-bold text-[24px]">
            Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="w-full text-left line-clamp-3
            text-gray-600 font-normal text-[16px]">
              A Frente Parlamentar da Agropecuária (FPA) está apoiando um novo projeto na Câmara dos Deputados para cancelar o Decreto 12.373/2025, assinado pelo presidente Lula. Esse decreto dá à Funai (Fundação Nacional dos Povos Indígenas) poderes semelhantes aos da polícia dentro de terras indígenas.
            </div>
            <div className='flex gap-2'>
              <Viewbutton text="225"/>
              <Commentbutton text="14"/>
            </div>
          </div>

        </div>
          
      </div>

      
    </div>
  )
}

export default PostSearch
