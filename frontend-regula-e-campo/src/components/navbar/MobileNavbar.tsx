'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from '../searchBar/SearchBar';
import LoginButton from '../buttons/loginButton/LoginButton';

export default function MobileNavbar() {
  return (
    <header style={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,0.07)' }}>
      {/* Aba verde superior, com o logo e a barra de pesquisa */}
      <div className="bg-[#5e301b] w-full h-18 flex justify-between items-center px-10">
        <div className="max-w-[1136px] w-full mx-auto flex justify-between items-center">
          {/* Logo do site */}
          <Link href="/">
            <img
              src="regulaEcampo.png"
              alt="logosite"
              className="h-14 object-cover"
              loading="lazy"
            />
          </Link>

          {/* Barra de pesquisa */}
          <SearchBar />

          {/* Área onde o usuário loga no seu perfil */}
          <LoginButton />
        </div>
      </div>
    </header>
  );
}