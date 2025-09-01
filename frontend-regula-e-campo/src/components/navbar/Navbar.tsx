"use client";
import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./item/index";
import { usePathname } from "next/navigation";
import SearchBar from "../searchBar/SearchBar";
import LoginButton from "../buttons/loginButton/LoginButton";

export default function Navbar() {
  const pathName = usePathname();

  const items: NavItemInterface[] = [
    { url: "/culturas", label: "Culturas", color: "text-green-700" },
    {
      url: "/defensivos_agricolas",
      label: "Defensivos Agrícolas",
      color: "text-orange-500",
    },
    { url: "/bioinsumos", label: "Bioinsumos", color: "text-blue-700" },
    { url: "/fertilizantes", label: "Fertilizantes", color: "text-yellow-900" },
    { url: "/biodiversidade", label: "Biodiversidade", color: "text-blue-400" },
    {
      url: "/pesquisa_e_inovacao",
      label: "Pesquisa e Inovação",
      color: "text-red-900",
    },
  ];

  return (
    <header style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,0.07)" }}>
      {/* Aba verde superior */}
      <div className="flex justify-between items-center bg-[#1B5E20] px-10 w-full h-18">
        <div className="flex items-center mx-auto w-full max-w-[1136px]">
          {/* Logo à esquerda */}
          <div className="flex justify-start basis-1/3">
            <Link href="/">
              <img
                src="regulaEcampo.png"
                alt="logosite"
                className="h-14 object-cover"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Barra de pesquisa central */}
          <div className="flex justify-center basis-1/3">
            <SearchBar />
          </div>

          {/* Login à direita */}
          <div className="flex justify-end basis-1/3">
            <LoginButton />
          </div>
        </div>
      </div>

      {/* Barra de navegação inferior */}
      <nav className="bg-white h-12">
        <ul className="flex flex-row justify-between mx-auto w-full max-w-[1136px]">
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
