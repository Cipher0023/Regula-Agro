import React from 'react'
import Badge from '@/components/Badge/Badge'

function Texto() {
  return (
    <top className="flex flex-col space-y-4">
      <div className="flex flex-row">
        <div className="space-x-2">
          <Badge 
          text="Culturas"
          bgColor='bg-[#E8F5E9]'
          textColor='text-[#1B5E20]'/>
          <Badge text="Bioinsumos"/>
          <Badge text="Tecnologia"/>
          </div>
        </div>
      
      <div className="w-full text-left
        text-gray-900 font-bold text-[40px]">
        Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse
      </div>

      <div className="w-full text-left
        text-gray-900 font-bold text-[16px]">
        A Basf lançou um aplicativo que promete revolucionar a forma como os agricultores gerenciam suas lavouras. O app, que já está em fase de testes em Sto. Antonio de Posse, oferece uma série de recursos inovadores para otimizar o uso de insumos e aumentar a produtividade.
      </div>

    </top>
  )
}

export default Texto
