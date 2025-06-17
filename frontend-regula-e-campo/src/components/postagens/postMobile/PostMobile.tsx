import React from 'react'
import Badge from '@/components/Badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'

function PostMobile() {
  return (
    <div className="h-auto flex flex-col space-y-3 w-full">

      <div className="flex flex-row space-x-2">
        <Badge 
        text="Culturas"
        bgColor='bg-[#E8F5E9]'
        textColor='text-[#1B5E20]'/>
      </div>

      <div className='relative rounded-2xl overflow-hidden h-full'>

        <div className="w-full text-left
        text-gray-800 p-4 font-bold text-[18px]">
          Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse
        </div>

        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover"
          loading="lazy"
        />

      </div>

      <div className='flex gap-2'>
        <Viewbutton text="225"/>
        <Commentbutton text="14"/>
      </div>
    </div>
  )
}

export default PostMobile
