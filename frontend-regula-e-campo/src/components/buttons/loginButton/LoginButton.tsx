import React from "react";
import Link from "next/link";
import { useViewportContext } from "@/contexts/ViewportContext";

interface LoginButtonProps {
  isLoggedIn: boolean;
  userName?: string;
  userImageUrl?: string;
}

export default function LoginButton({
  isLoggedIn,
  userName,
  userImageUrl,
}: LoginButtonProps) {
  const { isMobile } = useViewportContext();

  if (isMobile && isLoggedIn) {
    // No mobile, mostra só a foto de perfil (ou placeholder)
    return (
      <div className="bg-[#2E7D32] flex items-center justify-center rounded-full p-1 h-10 w-10 overflow-hidden">
        {userImageUrl ? (
          <img
            src={userImageUrl}
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-full" />
        )}
      </div>
    );
  }

  // Desktop ou não logado: mostra tudo normal
  return (
    <div className="bg-[#2E7D32] flex flex-row rounded-full p-1 items-center h-10 space-x-1">
      {!isLoggedIn ? (
        <Link href="/login">
          <div className="m-2 text-white text-xs font-bold hover:text-[#1B5E20] transition-colors duration-200">
            Entre ou se cadastre
          </div>
        </Link>
      ) : (
        <>
          {userImageUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={userImageUrl}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          )}

          <div className="text-white text-xs font-bold m-2">
            Olá, {userName}
          </div>
        </>
      )}
    </div>
  );
}
