import React from 'react'

function PostMedioH() {
  return (
    <div className="
    w-4/10 flex flex-row
    bg-gray-500 
    overflow-hidden
    m-2">
      <div className='w-5/10 aspect-[2/1]'>
        <img 
          src="trator.png"
          alt="imagem do post" 
          className="w-full h-full  object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
      <div
      className="text-left
      text-white bg-red-500
      font-bold text-sm"
      >
        Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
      </div>
    </div>
  )
}

export default PostMedioH
