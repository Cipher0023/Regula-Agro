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
  // Sempre usar o variant passado ou default "default"
  const resolvedVariant = variant ?? "default";

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ReactionType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const sortedReactions = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const total = Object.values(counts).reduce((sum, c) => sum + c, 0);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleSelect = (reaction: ReactionType) => {
    setSelected(reaction);
    setOpen(false);
    console.log("Usuário reagiu com:", reaction);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {resolvedVariant === "compact" ? (
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center text-xs text-neutral-800"
        >
          <img
            src={
              selected
                ? SVG_PATHS[selected]
                : "/emojis/like.svg"
            }
            alt="reagir"
            className="w-5 h-5 mb-1"
          />
          Reações ({total})
        </button>
      ) : (
        <button
          onClick={toggleMenu}
          className="cursor-pointer inline-flex items-center gap-2 px-3 h-8 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <div className="flex -space-x-1.5">
            {sortedReactions.map(([type], i) => (
              <span
                key={type}
                className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"
                style={{ zIndex: 3 - i }}
              >
                <img
                  src={SVG_PATHS[type as ReactionType]}
                  alt={type}
                  className="w-4 h-4"
                />
              </span>
            ))}
          </div>
          <span className="text-xs text-neutral-800 font-semibold">{total}</span>
        </button>
      )}

      {/* Menu de reações */}
      {open && (
        <div className="absolute bottom-full left-0 mb-6 flex gap-1 border border-gray-200 bg-white shadow-lg rounded-2xl overflow-hidden px-2 py-1 z-10">
          {(Object.keys(SVG_PATHS) as ReactionType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleSelect(type)}
              className="w-10 h-10 p-1 rounded-full hover:scale-110 transition-transform"
            >
              <img
                src={SVG_PATHS[type]}
                alt={type}
                className="w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
