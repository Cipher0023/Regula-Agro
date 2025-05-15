import React from 'react'

function PostGrande() {
  return (
    <div className="relative flex w-5/10 aspect-[2/1] bg-gray-500 rounded-2xl overflow-hidden">
      <img 
        src="trator.png"
        alt="imagem do post" 
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div
      className="absolute bottom-0 w-full text-left
      text-white bg-gradient-to-t from-black/80 to-transparent
      p-2 font-bold text-sm"
      >
        Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
      </div>
    </div>
  )
}

export default PostGrande
