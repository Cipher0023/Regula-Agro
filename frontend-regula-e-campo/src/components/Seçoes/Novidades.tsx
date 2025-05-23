import React from 'react'
import PostMedioS from '../postagens/postMedioS/PostMedioS'

function Novidades() {
  return (
    <div className="flex flex-col 
      space-y-3">
      <div className="text-gray-500 font-bold text-lg">
        Novidades
      </div>
      <div className="flex flex-row max-h-[548px] 
      space-x-4">
        <PostMedioS />
        <PostMedioS />  
        <PostMedioS /> 

      </div>
    </div>
  )
}

export default Novidades
