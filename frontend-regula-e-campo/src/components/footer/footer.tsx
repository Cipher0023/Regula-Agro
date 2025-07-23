import React from 'react'
import Link from "next/link"
import SocialButton from '../buttons/socialButton/SocialButton'

function Footer() {
  return (
    <div className="w-full bg-[#1B5E20]">
      <div className="max-w-[1136px] w-full mx-auto flex flex-col md:flex-row justify-between items-center md:items-start py-6 px-4 gap-6 md:gap-0">

        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Link href="/">
            <img
              src="regulaEcampo.png"
              alt="logosite"
              className="h-14 object-cover"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Centro (email e políticas) */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 text-white text-sm text-center md:text-left">
          <p>regulaecampo@gmail.com</p>
          <p className="hidden md:inline">|</p>
          <p>Política de privacidade</p>
          <p className="hidden md:inline">|</p>
          <SocialButton />
        </div>

        {/* Direitos autorais */}
        <div className="flex flex-col items-center md:items-end text-white text-sm">
          <p>© 2023 Regula e Campo</p>
          <p>Todos os direitos reservados</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
