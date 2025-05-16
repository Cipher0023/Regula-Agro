import React from 'react'
import PostGrande from '../postagens/postGrande/PostGrande'
import PostMedioH from '../postagens/postMedioH/PostMedioH'

function Destaques() {
  return (
    <div className="max-w-[1224px] flex flex-row
      bg-red-200 space-x-6">
      {/* PostGrande ocupa metade do espaço */}
      <div className="flex-1">
        <PostGrande />
      </div>

      {/* Coluna com dois PostMedioH também ocupa metade */}
      <div className="flex-1 space-y-6 flex flex-col">
        <PostMedioH />
        <PostMedioH />  
      </div>
    </div>
  )
}

export default Destaques
