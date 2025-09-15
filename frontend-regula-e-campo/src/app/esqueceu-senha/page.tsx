'use client'

import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleGoBack = () => {
    router.push('/')
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você chamaria a API para enviar link de recuperação
    setStep(2)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }
    // Aqui você chamaria a API para atualizar a senha
    setStep(3)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div
        className="w-[520px] flex flex-col items-start bg-white rounded-xl p-12"
        style={{
          boxShadow: `
            0px 8px 24px -3.25px rgba(0,0,0,0.086),
            0px 1.83px 5.5px -2.17px rgba(0,0,0,0.145),
            0px 0.5px 1.5px -1px rgba(0,0,0,0.16)
          `
        }}
      >
        {/* Botão de voltar */}
        <button
          onClick={handleGoBack}
          className="flex items-center text-[#1B5E20] hover:text-green-800 text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </button>

        {step === 1 && (
          <>
            <h1 className="text-2xl font-semibold mb-2">Esqueceu a senha?</h1>
            <p className="text-gray-600 text-m mb-10">
              Insira seu e-mail para receber um link de recuperação.
            </p>
            <form className="w-full space-y-4" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Informe seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1B5E20] hover:bg-green-800 text-white rounded-xl py-2 transition-colors"
              >
                Enviar link
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-semibold mb-2">Redefinir senha</h1>
            <p className="text-gray-600 text-m mb-10">
              Crie uma nova senha para sua conta.
            </p>
            <form className="w-full space-y-4" onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Nova senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              <input
                type="password"
                placeholder="Confirme a nova senha"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1B5E20] hover:bg-green-800 text-white rounded-xl py-2 transition-colors"
              >
                Redefinir senha
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="w-full flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Senha redefinida com sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Você já pode acessar sua conta usando a nova senha.
            </p>
            <button
              onClick={() => router.push('/login')}
              className="w-full bg-[#1B5E20] hover:bg-green-800 text-white rounded-xl py-2 transition-colors"
            >
              Ir para login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
