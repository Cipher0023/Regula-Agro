"use client"
import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./item/index";
import { usePathname } from "next/navigation";
import SearchBar from "../searchBar/SearchBar";
import LoginButton from "../buttons/loginButton/LoginButton";



export default function Navbar() {

  //aqui temos a criação de um array de objetos do tipo NavItemInterface
  //cada objeto representa um item de navegação no menu

  const items: NavItemInterface[] = [
    {
      url: "/culturas",
      label: "Culturas",
      color: "text-green-700"
    },
    {
      url: "/defensivos_agricolas",
      label: "Defensivos Agrícolas",
      color: "text-orange-500"
    },
    {
      url: "/bioinsumos",
      label: "Bioinsumos",
      color: "text-blue-700"
    },
    {
      url:"/fertilizantes",
      label:"Fertilizantes",
      color: "text-yellow-900"
    },
    {
      url:"/biodiversidade",
      label:"Biodiversidade",
      color: "text-blue-400"
    },
    {
      url:"/pesquisa_e_inovacao",
      label:"Pesquisa e Inovação",
      color: "text-red-900"
    },
  ];

  //usePathname é um hook do Next.js que retorna o pathname atual da URL
  const pathName = usePathname();

  return (
    <header style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,0.07)" }}>
  {/* Aba verde superior */}
  <div className="bg-[#1B5E20] w-full h-18 flex justify-between items-center px-10">
    <div className="max-w-[1136px] w-full mx-auto flex items-center">
      
      {/* Logo: alinhado à esquerda */}
      <div className="basis-1/3 flex justify-start">
        <Link href="/">
          <img 
            src="regulaEcampo.png"
            alt="logosite" 
            className="h-14 object-cover"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Barra de pesquisa: centralizada */}
      <div className="basis-1/3 flex justify-center">
        <SearchBar />
      </div>

      {/* Login: alinhado à direita */}
      <div className="basis-1/3 flex justify-end">
        <LoginButton 
          isLoggedIn={true} 
          userName="Kaio"
          userImageUrl="" // ou passe uma URL aqui se quiser
        />
      </div>

    </div>
  </div>

  {/* Barra de navegação inferior */}
  <nav className="bg-white h-12 px-10">
    <ul className="max-w-[1136px] w-full mx-auto flex justify-between flex-row">
      {items.map((item, index) => (
        <NavItem
          key={index}
          url={item.url}
          label={item.label}
          color={item.color}
          isActive={pathName === item.url}
        />
      ))}
    </ul>
  </nav>
</header>
  );
}
