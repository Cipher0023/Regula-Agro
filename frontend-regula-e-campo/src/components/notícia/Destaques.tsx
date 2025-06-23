"use client";

import React from "react";
import PostGrande from "../postagens/postGrande/PostGrande";
import PostMedioH from "../postagens/postMedioH/PostMedioH";
import PostMobile from "../postagens/postMobile/PostMobile";
import { useViewportContext } from "@/contexts/ViewportContext";

function Destaques() {
  const { isMobile } = useViewportContext();

  return (
    <>
      {isMobile ? (
        <div className="flex flex-row w-full max-h-[548px] space-x-4 bg-amber-200">
          <div className="flex-1">
            <PostMobile />
          </div>
        </div>
      ) : (
        <div className="flex flex-row max-h-[548px] space-x-4">
          <div className="flex-1">
            <PostGrande />
          </div>

          <div className="flex-1 space-y-4 flex flex-col pt-10 pb-10">
            <PostMedioH />
            <PostMedioH />
          </div>
        </div>
      )}
    </>
  );
}

export default Destaques;
