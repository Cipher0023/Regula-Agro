import React from "react";
import NotíciaNovidade from "../postagens/notícianovidade/NotíciaNovidade";

function Novidades() {
  return (
    <section>
      {/* Título único da seção */}
      <h2 className="text-2xl font-bold mb-4  text-neutral-700 ">Novidades</h2>

      <div className="flex flex-row w-full space-x-4">
        <div className="flex-1">
          <NotíciaNovidade
            imageUrl="trator.png"
            title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
            views={225}
            comments={14}
            badgeType="culturas"
          />
        </div>

        <div className="flex-1">
          <NotíciaNovidade
            imageUrl="trator.png"
            title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
            views={225}
            comments={14}
            badgeType="culturas"
          />
        </div>

        <div className="flex-1">
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