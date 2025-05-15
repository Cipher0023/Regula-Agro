import React from 'react'
import {Search} from "lucide-react";

type Props = object

function SearchBar({}: Props) {
  return (
    <div className=" w-100 flex flex-row bg-gray-500/70 rounded-full p-4 text-white items-center">
      <Search className="w-5 h-5 text-white" />
      <div className='pl-4'>
        Pesquisar
      </div>
    </div>
  )
}

export default SearchBar