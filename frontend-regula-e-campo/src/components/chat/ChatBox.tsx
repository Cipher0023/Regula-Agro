'use client';

import { useEffect, useRef, useState } from "react";
import MessageItem, { Message } from "./MessageItem";

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "João Silva",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Esse artigo foi muito interessante!",
      likes: 2,
    },
  ]);

  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      name: "Você",
      avatar: "https://i.pravatar.cc/150?img=10",
      text: input,
      likes: 0,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsFocused(false);
  };

  const handleLike = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full border border-gray-200 rounded-2xl p-6 sticky top-50 max-h-[calc(100vh-16rem)] flex flex-col">
      {/* Título */}
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800 border-gray-300">
        Comentários <span className="text-gray-500">({messages.length})</span>
      </h2>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mensagens */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto mb-4 pr-1">
          {messages.length === 0 ? (
            <p className="text-gray-500">Seja o primeiro a comentar!</p>
          ) : (
            <>
              {messages.map((msg) => (
                <MessageItem key={msg.id} {...msg} onLike={handleLike} />
              ))}
              <div ref={endOfMessagesRef} />
            </>
          )}
        </div>

        {/* Campo de input com avatar à esquerda */}
        <div className="border-t border-gray-200 pt-6 flex flex-col gap-2 mt-auto">
          <div className="flex gap-2 items-start">
            <img
              src="https://i.pravatar.cc/150?img=10"
              alt="Seu avatar"
              className="h-10 w-10 rounded-full object-cover "
            />
            <input
              type="text"
              value={input}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                if (input.trim() === "") setIsFocused(false);
              }}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              placeholder="Escreva seu comentário..."
            />
          </div>

          {/* Botão Enviar abaixo, alinhado à direita, visível apenas com foco/conteúdo */}
          {(isFocused || input.trim() !== "") && (
            <div className="flex justify-end">
              <button
                onClick={handleSend}
                className="bg-gray-100 text-gray-700 text-md font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out"
              >
                Enviar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
