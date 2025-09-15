'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Camera, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface UserData {
  name: string
  email: string
  password: string
  avatar?: string
}

export default function UserProfile() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const [originalData, setOriginalData] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const fakeUser = {
        name: 'João da Silva',
        email: 'joao@email.com',
        password: '',
        avatar: ''
      }
      setUserData(fakeUser)
      setOriginalData(fakeUser)
    }
    fetchUser()
  }, [])

  const hasChanges =
    JSON.stringify(userData) !== JSON.stringify(originalData) ||
    imagePreview !== null

  const handleChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    const payload = { ...userData, avatar: imagePreview || userData.avatar }
    console.log('Salvando alterações:', payload)
    setOriginalData(payload)
    setImagePreview(null)
    alert('Alterações salvas com sucesso!')
  }

  const handleGoBack = () => {
    router.push('/') // ou outra página
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div
        className="w-[520px] flex flex-col items-center bg-white rounded-xl p-12"
        style={{
          boxShadow: `
            0px 8px 24px -3.25px rgba(0,0,0,0.086),
            0px 1.83px 5.5px -2.17px rgba(0,0,0,0.145),
            0px 0.5px 1.5px -1px rgba(0,0,0,0.16)
          `
        }}
      >
        {/* Botão de voltar com seta */}
        <div className="w-full flex justify-start mb-6">
          <button
            onClick={handleGoBack}
            className="flex items-center text-[#1B5E20] hover:text-green-800 text-sm font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-10 relative">
          <div className="relative w-24 h-24">
            <img
              src={imagePreview || userData.avatar || 'https://via.placeholder.com/96?text=+'}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div
              onClick={handleImageClick}
              className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer border border-gray-200"
            >
              <Camera size={16} />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Formulário com espaçamento reduzido */}
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={userData.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={userData.email}
            onChange={e => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <input
            type="password"
            placeholder="Senha"
            value={userData.password}
            onChange={e => handleChange('password', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </form>

        {/* Botão de salvar */}
        {hasChanges && (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-[#1B5E20] hover:bg-green-800 text-white py-2 rounded-xl transition"
          >
            Salvar alterações
          </button>
        )}
      </div>
    </div>
  )
}
