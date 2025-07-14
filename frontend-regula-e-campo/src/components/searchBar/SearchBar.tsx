'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

type Props = object;

function SearchBar({}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div
      className={`w-100 h-10 flex flex-row items-center rounded-full px-3 transition-colors duration-200 
        ${isFocused ? 'bg-white' : 'bg-[#2E7D32]'}
      `}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Pesquisar"
        className={`bg-transparent outline-none w-full text-sm transition-colors duration-200
          ${isFocused ? 'text-gray-700 placeholder-gray-400' : 'text-white placeholder-white'}
        `}
      />
      <Search className={`w-4 h-4 ml-3 transition-colors duration-200 ${isFocused ? 'text-gray-600' : 'text-white'}`} />
    </div>
  );
}

export default SearchBar;