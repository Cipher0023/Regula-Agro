"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useRdrStore from "../../stores/useRdrStore";
import useCreStore from "@/stores/useCreStore";
import useDevStore from "@/stores/useDevStore";
import { useSessionStore } from "@/stores/sessionStore";

type Props = object;

function Inside_form({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const setRdr = useRdrStore((state) => state.setRdr);
  const clearCre = useCreStore((s) => s.clearCre);
  const clearDev = useDevStore((s) => s.clearDev);
  const loginAs = useSessionStore((s) => s.loginAs);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:3002/public/logRdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login feito com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
        // Garantir login único
        clearCre();
        clearDev();
        setRdr({
          id: data.reader.reader_id,
          name: data.reader.name,
          email: data.reader.email,
          image: data.reader.image,
        });
        loginAs("reader", {
          id: data.reader.reader_id,
          name: data.reader.name,
          email: data.reader.email,
          imageUrl: data.reader.image ?? null,
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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl fieldset-legend">Login</h1>
      <fieldset className="bg-base-100 p-4 border border-base-300 rounded-box w-xs font-bold text-secondary fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label">Senha</label>
        <input
          type="password"
          className="input"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center gap-2 m-2">
          <p className="hover:text-blue-500 hover:underline">
            esqueci minha senha
          </p>
        </div>
        <button className="btn btn-neutral" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
      {error && <p className="bg-base-100 mt-2 text-red-500">{error}</p>}
      {success && <p className="bg-base-100 mt-2 text-green-500">{success}</p>}
    </div>
  );
}

export default Inside_form;
