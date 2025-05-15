import React from 'react'
import PostGrande from '../postagens/postGrande/PostGrande'
import PostMedioH from '../postagens/postMedioH/PostMedioH'

function Destaques() {
  return (
    <div className="
    flex flex-col
    w-full bg-gray-500">
      <PostGrande/>
      <div>
        <PostMedioH/>
        <PostMedioH/>  
      </div>
    </div>
  )
}

export default Destaques
