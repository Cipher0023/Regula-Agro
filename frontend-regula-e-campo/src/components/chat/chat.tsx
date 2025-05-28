'use client';

import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="w-full max-w-[600px] border border-gray-200 rounded-2xl p-6 sticky top-40 max-h-[calc(100vh-12rem)] ">
      <h2 className="text-xl font-semibold mb-4">Comentários</h2>   
      <p className="text-gray-600 mb-4">
        Essa mudança é ótima para quem está pensando em adotar bioinsumos na produção de soja! Mas vale lembrar: mesmo com a regulamentação mais fácil, é importante ficar de olho na escolha dos produtos e como aplicá-los corretamente. 
        </p>
      <div className="flex flex-col h-[calc(100vh-25rem)] justify-between ">
        <div className="flex flex-col  gap-2 overflow-y-auto max-h-full mb-4">
          {messages.length === 0 ? (
            <p className="text-gray-500">Seja o primeiro a comentar!</p>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className="bg-gray-100 p-2 rounded-2xl">
                {msg}
              </div>
            ))
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Escreva seu comentário..."
          />
          <button
            onClick={handleSend}
            className="bg-gray-100 text-gray-700 text-md font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}