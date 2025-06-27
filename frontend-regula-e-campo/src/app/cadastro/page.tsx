import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[#1B5E20] text-white rounded-3xl p-5 font-semibold w-full max-w-md shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="">Cadastro regula e campo</div>
        </div>
        <div className="mb-2">Insira seu email</div>
        <input
          type="email"
          className="bg-gray-100/30 rounded-full p-2 mt-1 mb-4 w-full text-white placeholder-white/70 outline-none"
          placeholder="Email"
        />
        <div className="mb-2">Insira seu telefone</div>
        <input
          type="telephone"
          className="bg-gray-100/30 rounded-full p-2 mt-1 mb-4 w-full text-white placeholder-white/70 outline-none"
          placeholder="Telefone"
        />
        <div className="mb-2">Insira sua senha</div>
        <input
          type="password"
          className="bg-gray-100/30 rounded-full p-2 mt-1 mb-4 w-full text-white placeholder-white/70 outline-none"
          placeholder="Senha"
        />
        {/* Botão alinhado à direita */}
        <div className="flex justify-end">
          <button className="bg-gray-100/30 border-2 border-transparent text-white rounded-full px-6 py-2 hover:border-white transition-colors duration-200">
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
