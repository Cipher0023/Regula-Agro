'use client';

import { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import MessageItem from './MessageItem';
import { useChatMessages } from './useChatMessages';

interface MobileChatSheetProps {
  onClose: () => void;
}

export default function MobileChatSheet({ onClose }: MobileChatSheetProps) {
  const { messages, input, setInput, handleSend, handleLike } = useChatMessages();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-end">
      <div
        className="w-full bg-white rounded-t-2xl flex flex-col shadow-lg overflow-hidden"
        style={{ height: '460px' }} // 👈 altura fixa da bottom sheet
      >
        {/* Barra superior */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-neutral-800">
            Comentários <span className="text-gray-500">({messages.length})</span>
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Lista de mensagens com rolagem */}
        <div className="flex-1 overflow-y-auto px-4 pt-2 space-y-4">
          {messages.length === 0 ? (
            <p className="text-gray-500">Seja o primeiro a comentar!</p>
          ) : (
            <>
              {messages.map((msg) => (
                <MessageItem key={msg.id} {...msg} onLike={handleLike} />
              ))}
              <div ref={endRef} />
            </>
          )}
        </div>

        {/* Campo de texto fixo na parte inferior */}
        <div className="border-t border-gray-200 px-4 py-3 bg-white flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            placeholder="Adicione um comentário..."
          />
          <button
            onClick={handleSend}
            className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
