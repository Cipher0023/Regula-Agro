import React, { useState, useRef, useEffect } from "react";
import { Share2, Link2 } from 'lucide-react';
import { BsWhatsapp } from "react-icons/bs";

export default function Sharebutton() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Fecha o modal ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado!");
  }

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        className="cursor-pointer w-fit h-8 flex items-center justify-center gap-1 bg-gray-100 text-neutral-800 hover:bg-gray-200 text-xs px-3 rounded-full font-semibold"
        onClick={() => setOpen(prev => !prev)}
      >
        <Share2 size={16} />
        Compartilhar
      </button>

      {open && (
        <div
          ref={modalRef}
          className="absolute top-full mt-2 left-0 bg-white overflow-hidden rounded-2xl p-4 w-72 shadow-lg z-50 border border-gray-200"
        >
          <h2 className="text-lg text-gray-900 font-semibold mb-4">Compartilhar</h2>

          <div className="flex justify-around">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
            >
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white mb-2">
                <BsWhatsapp size={24} />
              </div>
              <span className="text-xs text-gray-600 text-center">via whatsapp</span>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={copyLink}
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 mb-2">
                <Link2 size={24} />
              </div>
              <span className="text-xs text-gray-600 text-center">copiar link</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}