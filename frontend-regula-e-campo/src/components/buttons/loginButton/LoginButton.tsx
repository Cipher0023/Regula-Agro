"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useViewportContext } from "@/contexts/ViewportContext";
import { User } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { LogOut } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import useDevStore from "@/stores/useDevStore";

export default function LoginButton() {
  const { isMobile } = useViewportContext();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
    const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const dev = useDevStore((s) => s.dev);
  const logged = Boolean(dev || user);
  const displayName = dev?.name ?? user?.name ?? "";

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Estado deslogado: botão de entrar (mobile e desktop)
  if (!logged) {
    return (
      <div className="relative" ref={buttonRef}>
        <Link
          href="/login"
          className={`flex items-center justify-center bg-[#2E7D32] hover:bg-[#27632a] transition-colors rounded-full h-10 px-4 text-white text-sm font-bold ${isMobile ? "w-24" : ""}`}
        >
          <User size={18} className="mr-2" />
          Entrar
        </Link>
      </div>
    );
  }

  if (isMobile && logged) {
    return (
      <div className="relative" ref={buttonRef}>
        <div
          className="flex justify-center items-center bg-[#2E7D32] p-1 rounded-full w-10 h-10 overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt="Foto de perfil"
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            <div className="bg-gray-200 rounded-full w-full h-full" />
          )}
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="right-0 z-50 absolute bg-white shadow-md mt-2 p-2 rounded-2xl w-52">
            <Link
              href="/perfil"
              className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-2xl"
            >
              <span className="flex flex-row items-center gap-2 text-sm">
                <User size={18} /> Ver perfil
              </span>
            </Link>
            <Link
              href="/curtidas"
              className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-2xl"
            >
              <span className="flex flex-row items-center gap-2 text-sm">
                <ThumbsUp size={18} /> Notícias curtidas
              </span>
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
              className="flex items-center hover:bg-gray-100 px-4 py-3 w-full text-left"
            >
              <span className="flex flex-row items-center gap-2 text-sm">
                <LogOut size={18} /> Sair da sessão
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={buttonRef}>
      <div
        className="flex flex-row items-center space-x-1 bg-[#2E7D32] p-1 rounded-full h-10 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user?.imageUrl ? (
          <div className="rounded-full w-10 h-10 overflow-hidden">
            <img
              src={user.imageUrl}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="bg-gray-200 rounded-full w-8 h-8" />
        )}

        <div className="m-2 font-bold text-white text-xs">{displayName}</div>
      </div>

      {isOpen && (
        <div className="right-0 z-50 absolute bg-white shadow-md mt-2 p-2 rounded-2xl w-52">
          <Link
            href="/perfil"
            className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-2xl"
          >
            <span className="flex flex-row items-center gap-2 text-sm">
              <User size={18} /> Ver perfil
            </span>
          </Link>
          <Link
            href="/curtidas"
            className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-2xl"
          >
            <span className="flex flex-row items-center gap-2 text-sm">
              <ThumbsUp size={18} /> Notícias curtidas
            </span>
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="flex items-center hover:bg-gray-100 px-4 py-3 rounded-2xl w-full text-left"
          >
            <span className="flex flex-row items-center gap-2 text-sm">
              <LogOut size={18} /> Sair da sessão
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
