"use client";

import React from "react";
import Notícia from "../postagens/notícia/Notícia";
import NotíciaSecundária from "../postagens/notíciasecundária/NotíciaSecundária";

function Destaques() {
  return (
    <div className="flex flex-row w-full max-h-[548px] space-x-4">
      <div className="flex-1">
        <Notícia
          imageUrl="trator.png"
          title="Tour app desenvolvido pela Basf teste em Sto. Antonio de Posse"
          views={225}
          comments={14}
          badgeType="culturas"
        />
      </div>

      <div className="flex-1 space-y-4 flex flex-col pb-10">
        <NotíciaSecundária 
          imageUrl="trator.png"
          title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
          views={225}
          comments={14}
          badgeType="culturas"
        />
        <NotíciaSecundária 
          imageUrl="trator.png"
          title="Tour app desenvolvido pela Basf tem teste em Sto. Antonio de Posse"
          views={225}
          comments={14}
          badgeType="culturas"
        />
      </div>
    </div>
  );
}

export default Destaques;