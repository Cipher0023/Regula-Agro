import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useViewportContext } from "@/contexts/ViewportContext";
import { User } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { LogOut } from 'lucide-react';


interface LoginButtonProps {
  isLoggedIn: boolean;
  userName?: string;
  userImageUrl?: string;
  onLogout?: () => void; // Adicionado para lidar com logout
}

export default function LoginButton({
  isLoggedIn,
  userName,
  userImageUrl,
  onLogout,
}: LoginButtonProps) {
  const { isMobile } = useViewportContext();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile && isLoggedIn) {
    return (
      <div className="relative" ref={buttonRef}>
        <div
          className="bg-[#2E7D32] flex items-center justify-center rounded-full p-1 h-10 w-10 overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {userImageUrl ? (
            <img src={userImageUrl} alt="Foto de perfil" className="w-full h-full object-cover rounded-full" />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-full" />
          )}
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute right-0 p-2 mt-2 w-52 bg-white rounded-2xl shadow-md z-50">
          <Link href="/perfil" className="flex items-center px-4 py-3 rounded-2xl hover:bg-gray-100">
            <span className="text-sm flex flex-row gap-2 items-center">
              <User size={18} /> Ver perfil</span>
            </Link>
            <Link href="/curtidas" className="flex items-center px-4 py-3 rounded-2xl hover:bg-gray-100">
            <span className="text-sm flex flex-row gap-2 items-center">
              <ThumbsUp size={18} /> Notícias curtidas</span>
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                onLogout?.(); // chama função de logout
              }}
              className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-100"
            >
              <span className="text-sm flex flex-row gap-2 items-center">
              <LogOut size={18} /> Sair da sessão</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={buttonRef}>
      <div
        className="bg-[#2E7D32] flex flex-row rounded-full p-1 items-center h-10 space-x-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {userImageUrl ? (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={userImageUrl} alt="Foto de perfil" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        )}

        <div className="text-white text-xs font-bold m-2">
          {userName}
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 p-2 mt-2 w-52 bg-white rounded-2xl shadow-md z-50">
          <Link href="/perfil" className="flex items-center px-4 py-3 rounded-2xl hover:bg-gray-100">
            <span className="text-sm flex flex-row gap-2 items-center">
              <User size={18} /> Ver perfil</span>
          </Link>
          <Link href="/curtidas" className="flex items-center px-4 py-3 rounded-2xl hover:bg-gray-100">
            <span className="text-sm flex flex-row gap-2 items-center">
              <ThumbsUp size={18} /> Notícias curtidas</span>
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              onLogout?.();
            }}
            className="flex items-center w-full px-4 py-3 text-left rounded-2xl hover:bg-gray-100"
          >
            <span className="text-sm flex flex-row gap-2 items-center">
              <LogOut size={18} /> Sair da sessão</span>
          </button>
        </div>
      )}
    </div>
  );
}
