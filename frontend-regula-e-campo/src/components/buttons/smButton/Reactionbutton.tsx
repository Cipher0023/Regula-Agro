'use client'

import React, { useState, useRef, useEffect } from "react";

type ReactionType = "like" | "heart" | "surprise" | "angry" | "sad";

interface ReactionButtonProps {
  counts: Record<ReactionType, number>;
  variant?: "default" | "compact";
}

const SVG_PATHS: Record<ReactionType, string> = {
  like: "/emojis/like.svg",
  heart: "/emojis/heart.svg",
  surprise: "/emojis/surprise.svg",
  angry: "/emojis/angry.svg",
  sad: "/emojis/sad.svg",
};

export default function ReactionButton({
  counts = {
    like: 0,
    heart: 0,
    surprise: 0,
    sad: 0,
    angry: 0,
  },
  variant,
}: ReactionButtonProps) {
  const resolvedVariant = variant ?? "default";
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ReactionType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const total = Object.values(counts).reduce((sum, c) => sum + c, 0);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleSelect = (reaction: ReactionType) => {
    if (selected === reaction) {
      setSelected(null); // Deseleciona
    } else {
      setSelected(reaction); // Seleciona novo
    }
    setOpen(false);
    console.log("Usuário reagiu com:", reaction);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Ordena reações por mais usadas
  const reactionsSorted = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type as ReactionType);

  // Garante que a reação selecionada venha em primeiro (sem duplicar)
  const sortedReactions: ReactionType[] = selected
    ? [selected, ...reactionsSorted.filter((r) => r !== selected)].slice(0, 3)
    : reactionsSorted.slice(0, 3);

  return (
    <div className="relative" ref={wrapperRef}>
      {resolvedVariant === "compact" ? (
        <button
          onClick={toggleMenu}
          className={`
            flex flex-col items-center gap-1
            ${selected ? "text-blue-600" : "text-neutral-800"}
          `}
        >
          <div className="flex -space-x-1.5">
            {sortedReactions.map((type, i) => (
              <span
                key={type}
                className={`
                  w-5 h-5 rounded-full flex items-center justify-center overflow-hidden
                  border-2 ${selected === type ? "border-blue-500" : "border-white"}
                  bg-white
                `}
                style={{ zIndex: 3 - i }}
              >
                <img src={SVG_PATHS[type]} alt={type} className="w-4 h-4" />
              </span>
            ))}
          </div>
          <span className="text-xs font-medium text-center">Reações ({total})</span>
        </button>
      ) : (
        <button
          onClick={toggleMenu}
          className={`
            cursor-pointer inline-flex items-center gap-2 px-3 h-8
            rounded-full hover:bg-gray-200
            ${selected ? "bg-blue-100" : "bg-gray-100"}
          `}
        >
          <div className="flex -space-x-1.5">
            {sortedReactions.map((type, i) => (
              <span
                key={type}
                className={`
                  w-5 h-5 rounded-full flex items-center justify-center overflow-hidden
                  border-2 ${selected === type ? "border-blue-500" : "border-white"}
                  bg-white
                `}
                style={{ zIndex: 3 - i }}
              >
                <img src={SVG_PATHS[type]} alt={type} className="w-4 h-4" />
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral-800 font-semibold">{total}</span>
        </button>
      )}

      {/* Menu de reações */}
      {open && (
        <div className="absolute bottom-full left-0 mb-2 flex gap-1 border border-gray-200 bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-1 z-10">
          {(Object.keys(SVG_PATHS) as ReactionType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleSelect(type)}
              className={`
                w-10 h-10 p-1 rounded-full hover:scale-110 transition-transform
                ${selected === type ? "ring ring-blue-500" : ""}
              `}
            >
              <img src={SVG_PATHS[type]} alt={type} className="w-full h-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
