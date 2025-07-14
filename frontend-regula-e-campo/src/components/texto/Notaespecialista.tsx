import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NotaDoEspecialistaProps {
  nome: string;
  texto: string;
  imagemUrl: string;
}

export default function NotaDoEspecialista({
  nome,
  texto,
  imagemUrl,
}: NotaDoEspecialistaProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden">
      {/* Cabeçalho */}
      <button
        onClick={() => setAberto(!aberto)}
        className="h-[56px] w-full px-4 flex items-center justify-between text-base font-semibold text-gray-700 cursor-pointer"
      >
        <span>Nota do especialista</span>
        {aberto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Conteúdo Expandido */}
      {aberto && (
        <div className="px-4 pb-4 space-y-3">
          {/* Div 1: Perfil */}
          <div className="flex items-center space-x-3">
            <img
              src={imagemUrl}
              alt={`Foto de ${nome}`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-neutral-800">{nome}</p>
              <p className="text-xs text-gray-500">Especialista R&C</p>
            </div>
          </div>

          {/* Div 2: Texto */}
          <p className="text-base text-gray-700">{texto}</p>
        </div>
      )}
    </div>
  );
}