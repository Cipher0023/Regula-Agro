import React from 'react'
import PostGrande from '../postagens/postGrande/PostGrande'
import PostMedioH from '../postagens/postMedioH/PostMedioH'

function Destaques() {
  return (
    <div className="flex flex-row max-h-[548px] 
      space-x-4">
      {/* PostGrande ocupa metade do espaço */}
      <div className="flex-1">
        <PostGrande />
      </div>

      {/* Coluna com dois PostMedioH também ocupa metade */}
      <div className="flex-1 space-y-4 flex flex-col pt-10 pb-10">
        
        <PostMedioH />
        <PostMedioH />  
      </div>
    </div>
  )
}

export default Destaques
