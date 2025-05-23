import React from 'react'
import Badge from '@/components/Badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'

function PostGrande2() {
  return (
    <div className="h-full flex flex-col rounded-2xl overflow-hidden relative bg-yellow-50">
      <div className="flex flex-row absolute space-x-2 top-3 left-3">
        <Badge text = "Bioinsumos"/>
      </div>
      <img 
        src="trator.png"
        alt="imagem do post" 
        className="w-full h-full object-cover"
        loading="lazy"
        />
      <div className="flex flex-col absolute space-y-2 bottom-3 left-3">
        <div className='text-left relative text-white font-bold text-[24px] '> 
          Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
        </div>
      <div className="flex flex-row space-x-2 ">
        <Viewbutton text = "85"/>
        <Commentbutton text = "5"/>
      </div>
    </div>
    </div>
  )
}

export default PostGrande2
