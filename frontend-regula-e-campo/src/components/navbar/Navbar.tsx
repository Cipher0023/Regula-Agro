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
    <header>
      {/*Aba verde superior, com o logo e a barra de pesquisa */}
      <div className="bg-green-800 w-full flex justify-between items-center">
        
        {/* logo do site */}
        {/*está sublinhado azul pois ainda estamos usando um arquivo local
        para que fique correto nós devemos trocar por um objeto Image do next.js
        esse objeto necessita de um link para que a imagem carregue, isso só é 
        possível quando temos um backend pronto e com um banco de dados de imagens
        rodando, no futuro mecheremos nisso*/}
        <Link href="/">
          <img 
            src="regulaEcampo.png"
            alt="logosite" 
            className="h-20 object-cover"
            loading="lazy"
          />
        </Link>
        {/*Barra de pesquisa*/}
        <SearchBar/>
        {/*área onde o user loga no seu perfil*/}
        <LoginButton/>
      </div>
      {/*barra de navegação*/}
      <nav className="bg-gradient-to-b from-white from-90% to-gray-300 flex flex-col justify-between items-center">
        <ul className="flex flex-row">
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
