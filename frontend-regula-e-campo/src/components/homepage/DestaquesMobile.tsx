import React from 'react'
import NotíciaMobile from '../postagens/notíciasmobile/NotíciasMobile'

function DestaquesMobile() {
  return (
    <div className="flex flex-row w-full">
      {/* PostGrande ocupa metade do espaço */}
      <div className="space-y-6 w-full">
        <NotíciaMobile 
  imageUrl="trator.png"
  title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
  views={25}
  comments={14}
  badgeType="culturas"
/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <NotíciaMobile 
  imageUrl="trator.png"
  title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
  views={25}
  comments={14}
  badgeType="culturas"
/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <NotíciaMobile 
  imageUrl="trator.png"
  title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
  views={25}
  comments={14}
  badgeType="culturas"
/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <NotíciaMobile 
  imageUrl="trator.png"
  title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
  views={25}
  comments={14}
  badgeType="culturas"
/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <NotíciaMobile 
  imageUrl="trator.png"
  title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
  views={25}
  comments={14}
  badgeType="culturas"
/>
      </div>
    </div>
  )
}

export default DestaquesMobile
