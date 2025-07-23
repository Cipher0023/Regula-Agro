'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Search } from 'lucide-react'
import LoginButton from '../buttons/loginButton/LoginButton'
import { usePathname, useRouter } from 'next/navigation'
import type { NavItemInterface } from './item/index'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const pathName = usePathname()
  const router = useRouter()

  const items: NavItemInterface[] = [
    { url: '/culturas', label: 'Culturas', color: 'text-green-700' },
    { url: '/defensivos_agricolas', label: 'Defensivos Agrícolas', color: 'text-orange-500' },
    { url: '/bioinsumos', label: 'Bioinsumos', color: 'text-blue-700' },
    { url: '/fertilizantes', label: 'Fertilizantes', color: 'text-yellow-900' },
    { url: '/biodiversidade', label: 'Biodiversidade', color: 'text-blue-400' },
    { url: '/pesquisa_e_inovacao', label: 'Pesquisa e Inovação', color: 'text-red-900' },
  ]

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setIsOpen(false)
      router.push(`/busca?termo=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <header className="shadow-md md:hidden">
      {/* Top bar verde */}
      <div className="bg-[#1B5E20] w-full h-14 flex justify-between items-center px-4">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="text-white" />
        </button>

        <Link href="/">
          <img
            src="/regulaEcampo.png"
            alt="Logo do site"
            className="h-10 object-cover"
            loading="lazy"
          />
        </Link>

        <LoginButton
          isLoggedIn={true}
          userName="Kaio"
          userImageUrl=""
        />
      </div>

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-gray-800">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        {/* Campo de busca com ícone clicável */}
        <form
          onSubmit={handleSearchSubmit}
          className="px-4 mt-2 mb-6 relative flex items-center"
        >
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
          <button type="submit" className="absolute right-6 text-gray-500 hover:text-black">
            <Search className="h-4 w-4" />
          </button>
        </form>

        {/* Navegação */}
        <nav className="px-4 space-y-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex justify-between items-center font-semibold ${
              pathName === '/' ? 'text-black font-semibold' : 'text-gray-700'
            }`}
          >
            Início
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </Link>

          {items.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={`flex justify-between items-center font-semibold ${item.color} ${
                pathName === item.url ? 'font-bold underline' : ''
              }`}
            >
              {item.label}
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Fundo escurecido com blur atrás do drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/33 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  )
}
