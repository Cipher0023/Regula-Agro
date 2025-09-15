"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useViewportContext } from "@/contexts/ViewportContext"; // 👈 importa o contexto

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { isMobile } = useViewportContext(); // 👈 detecta se é mobile

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleGoHome = () => {
    router.push("/");
  };

  // classes condicionais para card
  const cardClasses = isMobile
    ? "w-full flex flex-col items-start" // 👈 mobile sem card
    : "w-[520px] flex flex-col items-start bg-white rounded-xl p-12"; // 👈 desktop com card

  const cardStyle = isMobile
    ? {}
    : {
        boxShadow: `
          0px 8px 24px -3.25px rgba(0,0,0,0.086),
          0px 1.83px 5.5px -2.17px rgba(0,0,0,0.145),
          0px 0.5px 1.5px -1px rgba(0,0,0,0.16)
        `,
      };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className={`${cardClasses} items-center`} style={cardStyle}>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Cadastro realizado com sucesso!
          </h2>
          <p className="text-gray-600 text-m mb-6 text-center">
            Você receberá uma confirmação no seu e-mail.
          </p>
          <button
            onClick={handleGoHome}
            className="w-full bg-[#1B5E20] hover:bg-green-800 text-white rounded-xl py-2 mb-6 transition-colors"
          >
            Voltar à tela inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <form onSubmit={handleSubmit} className={cardClasses} style={cardStyle}>
        {/* Botão de voltar */}
        <Link
          href="/"
          className="flex items-center text-[#1B5E20] hover:text-green-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Voltar</span>
        </Link>

        {/* Logo */}
        <img
          src="greenlogo.svg"
          alt="Logo Regula & Campo"
          className="h-18 mb-6"
        />

        {/* Título */}
        <h1 className="text-2xl font-semibold mb-2">
          Faça parte da comunidade do Regula & Campo
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-600 text-m mb-10">
          Preencha os dados abaixo para se cadastrar.
        </p>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Como quer ser chamado?"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />
        <input
          type="email"
          placeholder="Informe seu e-mail"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />
        <input
          type="password"
          placeholder="Crie uma senha"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />
        <input
          type="tel"
          placeholder="Informe seu telefone"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-700"
          required
        />

        {/* Botão */}
        <button className="w-full font-semibold bg-[#1B5E20] hover:bg-green-800 text-white rounded-xl py-2 mb-6 transition-colors">
          Cadastrar
        </button>

        {/* Link para login */}
        <p className="self-center text-sm text-gray-600">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="text-[#1B5E20] font-bold hover:underline"
          >
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
