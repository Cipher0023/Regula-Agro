"use client"

import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./Item/index";
import { usePathname } from "next/navigation";
import { Chakra_Petch } from 'next/font/google';



const chakra = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  });


export default function Navbar() {

  const items: NavItemInterface[] = [
    {
      url: "/produtos",
      label: "Produtos"
    },
    {
      url: "/sobre",
      label: "Sobre"
    },
    {
      url: "/contato",
      label: "Contato"
    },
    {
      url:"/blog",
      label:"Blog"
    }
  ];

  const pathName = usePathname();

  return (
    <header>
      <nav className="sm:h-[2em] bg-gradient-to-b  from-gray-700 to-gray-700 flex flex-row text-2xl justify-between items-center box-border">
        <Link href="/">
          <Logo/>            
        </Link>
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
        <Link href="/login" className={`p-1 border-3 border-transparent ${chakra.className} bg-gray-950 text-white hover:border-blue-500 m-2`}>
        Login
        </Link>
      </nav>
    </header>
  );
}
