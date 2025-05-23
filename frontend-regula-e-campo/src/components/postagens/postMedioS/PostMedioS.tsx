import React from 'react'
import Badge from '@/components/Badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'

function PostMedioS() {
  return (
    <div className="h-auto flex flex-col overflow-hidden space-y-3
  ">
      <div className='flex-1 relative'>
        <div className = "absolute top-2 left-2">
          <Badge text = "Bioinsumos"/>
        </div>
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"/>
      </div>
      <div className="flex-1 flex flex-col space-y-4">
        <div className='text-left relative text-grey-800 font-bold text-lg h-full'> 
          Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse 
        </div>

        <div className='flex gap-2'>
          <Viewbutton text="109"/>
          <Commentbutton text="22"/>
        </div>
      </div>
    </div>
  )
}

export default PostMedioS
