'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera } from 'lucide-react'

interface UserData {
  name: string
  email: string
  password: string
  avatar?: string
}

export default function UserForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // Dados originais e os que estão sendo editados
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const [originalData, setOriginalData] = useState<UserData | null>(null)

  // Carregar dados simulados do back
  useEffect(() => {
    const fetchUser = async () => {
      // Simule aqui o fetch real
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

  // Detectar se houve alguma alteração
  const hasChanges =
    JSON.stringify(userData) !== JSON.stringify(originalData) ||
    imagePreview !== null

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const payload = {
        ...userData,
        avatar: imagePreview || userData.avatar
      }

      // Simule envio para o back-end
      console.log('Enviando para o back-end:', payload)

      // Após salvar, atualiza original
      setOriginalData(payload)
      setImagePreview(null)
      alert('Alterações salvas com sucesso!')
    } catch (error) {
      console.error('Erro ao salvar', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-110 p-6 rounded-xl shadow border border-gray-200">
        <a href="/" className="text-green-700 font-medium mb-4 inline-block">Voltar</a>

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

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nome"
            value={userData.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={userData.email}
            onChange={e => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={userData.password}
            onChange={e => handleChange('password', e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </form>

        {hasChanges && (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Salvar alterações
          </button>
        )}
      </div>
    </div>
  )
}
