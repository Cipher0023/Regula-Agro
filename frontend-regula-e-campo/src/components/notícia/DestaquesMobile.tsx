import React from 'react'
import PostMobile from '../postagens/postMobile/PostMobile'

function DestaquesMobile() {
  return (
    <div className="flex flex-row w-full max-h-[548px] 
      space-x-4 bg-amber-200">
      {/* PostGrande ocupa metade do espaço */}
      <div className="flex-1">
        <PostMobile />
      </div>
    </div>
  )
}

export default DestaquesMobile
