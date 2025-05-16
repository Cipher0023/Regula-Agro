import React from 'react'

function PostMedioH() {
  return (
    <div className="h-auto flex flex-row overflow-hidden space-x-3">
      <div className='flex-1 relative'>
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div
      className="flex-1 text-left relative text-grey font-bold text-base"
      >
        Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
      </div>
    </div>
  )
}

export default PostMedioH
