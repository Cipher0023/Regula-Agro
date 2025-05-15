import React from 'react'

type Props = object

function PropagandaWide({}: Props) {
  return (
    <div className='w-8/10 aspect-[6/1] bg-red-500 m-10'>
      <img 
        src="propaganda.jpg"
        alt="imagem do post" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

export default PropagandaWide