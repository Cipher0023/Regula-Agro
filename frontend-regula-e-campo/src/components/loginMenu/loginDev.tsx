"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useDevStore from "../../stores/useDevStore";
import useRdrStore from "@/stores/useRdrStore";
import useCreStore from "@/stores/useCreStore";
import { useSessionStore } from "@/stores/sessionStore";

type Props = object;

export default function LogMenuInterno({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const setDev = useDevStore((state) => state.setDev);
  const clearRdr = useRdrStore((s) => s.clearRdr);
  const clearCre = useCreStore((s) => s.clearCre);
  const loginAs = useSessionStore((s) => s.loginAs);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:3002/public/logDev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login de desenvolvedor feito com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
        // Garantir login único
        clearRdr();
        clearCre();
        setDev({
          id: data.developer.dev_id,
          name: data.developer.name,
          email: data.developer.email,
          image: data.developer.image,
        });
        loginAs("developer", {
          id: data.developer.dev_id,
          name: data.developer.name,
          email: data.developer.email,
          imageUrl: data.developer.image ?? null,
        });
        router.push("/");
      } else {
        setError(data.message || "Erro ao fazer login");
        setSuccess("");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-[#1B5E20] shadow-lg p-5 rounded-3xl w-full max-w-md font-semibold text-white">
        <div className="flex justify-center items-center mb-4">
          <div className="text-2xl">Login interno</div>
        </div>
        <div className="mb-2">Insira seu email</div>
        <input
          type="email"
          className="bg-gray-100/30 mt-1 mb-4 p-2 rounded-full outline-none w-full text-white placeholder-white/70"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mb-2">Insira sua senha</div>
        <input
          type="password"
          className="bg-gray-100/30 mt-1 mb-4 p-2 rounded-full outline-none w-full text-white placeholder-white/70"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Botão alinhado à direita */}
        <div className="flex justify-end">
          <button
            onClick={handleLogin}
            className="bg-gray-100/30 px-6 py-2 border-2 hover:border-white border-transparent rounded-full text-white transition-colors duration-200"
          >
            Entrar
          </button>
        </div>
        {error && <p className="bg-base-100 mt-2 text-red-500">{error}</p>}
        {success && (
          <p className="bg-base-100 mt-2 text-green-500">{success}</p>
        )}
      </div>
    </div>
  );
}
