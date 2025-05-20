import React from 'react'
import PostGrande from '../postagens/postGrande/PostGrande'
import PostMedioH from '../postagens/postMedioH/PostMedioH'

function Destaques() {
  return (
    <div className="flex flex-row
      space-x-6">
      {/* PostGrande ocupa metade do espaço */}
      <div className="flex-1">
        <PostGrande />
      </div>

      {/* Coluna com dois PostMedioH também ocupa metade */}
      <div className="flex-1 space-y-6 flex flex-col pt-10 pb-10">
        
        <PostMedioH />
        <PostMedioH />  
      </div>
    </div>
  )
}

export default Destaques
