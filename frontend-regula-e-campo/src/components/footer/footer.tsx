import React from 'react'
import Link from "next/link"
import SocialButton from '../buttons/socialButton/SocialButton'


function Footer() {
  return (
    <div className="w-full h-20 flex flex-col  bg-[#1B5E20]">
      <div className="max-w-[1224px] w-full mx-auto flex justify-between items-center h-full">
        <div className="flex items-center flex-1">
          <Link href="/">
            <img 
            src="regulaEcampo.png"
            alt="logosite" 
            className="h-14 object-cover"
            loading="lazy"
          />
          </Link>
        </div>

        <div className="flex flex-row items-center gap-4 w-auto">
          <p className="text-white text-sm">regula&campo@gmail.com</p>
          <p className="text-white text-sm">|</p>
          <p className="text-white text-sm">Política de privacidade</p>
          <p className="text-white text-sm">|</p>
          <SocialButton />
          </div>

        <div className="flex flex-col items-end flex-1">
          <p className="text-white text-sm">© 2023 Regula e Campo</p>
          <p className="text-white text-sm">Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  )
}

export default Footer