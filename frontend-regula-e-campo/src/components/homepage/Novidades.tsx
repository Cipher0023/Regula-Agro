"use client";

import React from "react";
import NotíciaNovidade from "../postagens/notícianovidade/NotíciaNovidade";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Novidades() {
  return (
    <section>
      {/* Cabeçalho da seção: título + link */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-neutral-700">Novidades</h2>
        <Link
          href="/todasnoticias" // <- endereço correto da página
          className="flex items-center text-[#1B5E20] font-bold text-sm hover:underline transition-colors"
        >
          Ver todas as notícias
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Notícias */}
      <div className="flex flex-row w-full space-x-4 mb-4">
        <div className="flex-1 flex">
          <NotíciaNovidade
            imageUrl="trator.png"
            title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
            views={225}
            comments={14}
            badgeType="culturas"
          />
        </div>

        <div className="flex-1 flex">
          <NotíciaNovidade
            imageUrl="trator.png"
            title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
            views={225}
            comments={14}
            badgeType="culturas"
          />
        </div>

        <div className="flex-1 flex">
          <NotíciaNovidade
            imageUrl="trator.png"
            title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
            views={225}
            comments={14}
            badgeType="culturas"
          />
        </div>
      </div>
    </section>
  );
}

export default Novidades;
