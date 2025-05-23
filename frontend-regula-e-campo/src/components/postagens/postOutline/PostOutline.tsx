import React from 'react'
import Badge from '@/components/Badge/Badge'
import Commentbutton from '@/components/buttons/smButton/Commentbutton'
import Viewbutton from '@/components/buttons/smButton/Viewbutton'

function PostOutline() {
  return (
    <div className="rounded-2x1 h-full flex flex-col space-y-3  border border-gray-300 p-3 rounded-2xl">

      <div className="flex flex-row space-x-2">
        <Badge 
        text="Culturas"
        bgColor='bg-[#E8F5E9]'
        textColor='text-[#1B5E20]'/>

        <Badge text="Bioinsumos"/>
      </div>

      <div className='relative rounded-2xl overflow-hidden h-full'>
        

        <div className="w-full text-left
        text-gray-900 font-bold text-[24px]">
          Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
        </div>
      </div>

      <div className='flex gap-2'>
        <Viewbutton text="225"/>
        <Commentbutton text="14"/>
      </div>
    </div>
  )
}

export default PostOutline
