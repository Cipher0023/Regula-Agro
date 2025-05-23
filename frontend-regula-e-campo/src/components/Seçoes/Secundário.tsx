import React from 'react'
import PostOutline from '../postagens/postOutline/PostOutline'
import PostGrande2 from '../postagens/postGrande2/PostGrande2'

function Secundário() {
  return (
    <div className="flex flex-row max-h-[380px] 
      space-x-4 h-[380px] w-full">
      {/* PostGrande ocupa metade do espaço */}
      <div className="flex-1">
        <PostOutline />
      </div>

      {/* Coluna com dois PostMedioH também ocupa metade */}
      <div className="flex-1 flex flex-col">
        
        <PostGrande2 />
      </div>
    </div>
  )
}

export default Secundário
