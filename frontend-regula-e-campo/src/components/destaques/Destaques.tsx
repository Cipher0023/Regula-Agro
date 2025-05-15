import React from 'react'
import PostGrande from '../postagens/postGrande/PostGrande'
import PostMedioH from '../postagens/postMedioH/PostMedioH'

function Destaques() {
  return (
    <div className="
    flex flex-row
    w-full bg-gray-800">
      <PostGrande/>
      <div className='bg-blue-500'>
        <PostMedioH/>
        <PostMedioH/>  
      </div>
    </div>
  )
}

export default Destaques
