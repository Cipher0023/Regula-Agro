import React from 'react'
import Badge from '@/components/Badge/Badge'
import Smbutton from '@/components/buttons/smButton/Testbutton'

function PostGrande() {
  return (
    <div className="rounded-2x1 overflow-hidden h-full flex flex-col space-y-3">

      <div className="flex flex-row space-x-2">
        <Badge 
        text="Culturas"
        bgColor='bg-[#E8F5E9]'
        textColor='text-[#1B5E20]'/>

        <Badge text="Bioinsumos"/>
      </div>

      <div className='relative rounded-2xl overflow-hidden h-full'>
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <div className="absolute bottom-0 w-full text-left
        text-white bg-gradient-to-t from-black/ to-transparent
        p-4 font-bold text-[24px]">
          Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse
        </div>
      </div>

      <div className='flex gap-2'>
        <Smbutton text="109"/>
        <Smbutton text="109"/>
      </div>
    </div>
  )
}

export default PostGrande
