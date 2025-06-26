import React from "react";

type Props = object;

export default function LogMenu({}: Props) {
  return (
    <div className="bg-[#1B5E20] text-white  rounded-4xl p-10 font-semibold">
      <div>insira seu email</div>
      <input
        type="email"
        className="bg-gray-100/30 rounded-full p-2 mt-2 mb-4 w-full"
        placeholder="Email"
      />
      <div>insira sua senha</div>
      <input
        type="password"
        className="bg-gray-100/30 rounded-full p-2 mt-2 mb-4 w-full"
        placeholder="Senha"
      />

      <button>
        <div className="bg-[#1B5E20] text-white rounded-full p-2 mt-4 w-full hover:bg-[#145A32] transition-colors duration-200">
          Entrar
        </div>
      </button>
    </div>
  );
}
