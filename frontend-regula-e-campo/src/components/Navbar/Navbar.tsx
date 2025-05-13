"use client"
import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./Item/index";
import { usePathname } from "next/navigation";
import {Search} from "lucide-react";



export default function Navbar() {

  const items: NavItemInterface[] = [
    {
      url: "/culturas",
      label: "Culturas"
    },
    {
      url: "/defensivos_agricolas",
      label: "Defensivos Agrícolas"
    },
    {
      url: "/bioinsumos",
      label: "Bioinsumos"
    },
    {
      url:"/fertilizantes",
      label:"Fertilizantes"
    },
    {
      url:"/biodiversidade",
      label:"Meio Ambiente"
    },
    {
      url:"/pesquisa_e_inovacao",
      label:"Pesquisa e Inovação"
    },
  ];

  const pathName = usePathname();

  return (
    <header>
      <div className="bg-green-800 w-full flex justify-between items-center">
        <Link href="/">
          <img 
            src="regulaEcampo.png"
            alt="banner" 
            className="h-20 object-cover"
            loading="lazy"
          />
        </Link>

        <div className=" w-100 flex flex-row bg-gray-500/70 rounded-full p-4">
          <Search className="w-5 h-5 text-white" />
          Pesquisar
        </div>

        <div>
          user
        </div>

      </div>
      <nav className="bg-white flex flex-row text-sm justify-between items-center box-border">
        <ul className="flex flex-row">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathName === item.url}
            />
          ))}
        </ul>
        <Link href="/login" className="p-1 text-sm border-3 border-transparent bg-gray-400/90 rounded-full text-white hover:border-green-500 m-2">
        <div>teste</div>
        Login
        </Link>
      </nav>
    </header>
  );
}
