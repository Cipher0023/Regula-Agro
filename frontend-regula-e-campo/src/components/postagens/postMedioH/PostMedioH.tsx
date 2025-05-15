import React from 'react'

function PostMedioH() {
  return (
    <div className="
    flex flex-row
    bg-gray-500 
    overflow-hidden
    m-2">
      <div className='relative'>
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full aspect[1/1] object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div
      className="text-left
      relative
      text-white bg-red-500
      font-bold text-base"
      >
        Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
      </div>
    </div>
  )
}

export default PostMedioH
