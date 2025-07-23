'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    router.push(`/busca?termo=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-100 h-10 flex flex-row items-center rounded-full px-3 transition-colors duration-200 justify-center
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
      <button type="submit">
        <Search
          className={`w-4 h-4 ml-3 transition-colors duration-200 ${
            isFocused ? 'text-gray-600' : 'text-white'
          }`}
        />
      </button>
    </form>
  );
}

export default SearchBar;
