import React from 'react'
import Smbutton from '@/components/buttons/smButton/Testbutton'
import Badge from '@/components/Badge/Badge'

function PostMedioH() {
  return (
    <div className="h-auto flex flex-row overflow-hidden space-x-3">
      <div className='flex-1 relative'>
        <Badge 
          text="Destaque" 
          className="absolute top-2 left-2 z-2"/>
          
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className='text-left relative text-grey-800 font-bold text-lg h-full'> 
          Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
        </div>

        <div className='flex gap-2'>
          <Smbutton text="109"/>
          <Smbutton text="109"/>
        </div>
      </div>
    </div>
  )
}

export default PostMedioH
