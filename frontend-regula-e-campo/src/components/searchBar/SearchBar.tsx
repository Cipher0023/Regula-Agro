import React from 'react'
import {Search} from "lucide-react";

type Props = object

function SearchBar({}: Props) {
  return (
    <div className=" w-89 h-9 flex flex-row bg-[#2E7D32] rounded-full p-3 text-white items-center">
      <Search className="w-3.5 h-3.5 text-white" />
      <div className='pl-4'>
        Pesquisar
      </div>
    </div>
  )
}

export default SearchBar