import React from 'react'

function PostGrande() {
  return (
    <div className="relative bg-yellow-500 rounded-2xl overflow-hidden h-full">
      <img 
        src="trator.png"
        alt="imagem do post" 
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div
      className="absolute bottom-0 w-full text-left
      text-white bg-gradient-to-t from-black/ to-transparent
      p-4 font-bold text-[24px]"
      >
        Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse
      </div>
    </div>
  )
}

export default PostGrande
