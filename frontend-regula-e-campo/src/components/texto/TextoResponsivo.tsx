'use client'

import { useEffect, useState } from "react"
import Texto from "@/components/texto/Texto"
import TextoMobile from "@/components/texto/TextoMobile"

interface Props {
  title: string
  subtitle: string
  imageUrl: string
  content: string
  views: number
  badgeType: "culturas" | "defensivos" | "bioinsumos" | "fertilizantes"
}

export default function TextoResponsive(props: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Verifica no carregamento
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile ? <TextoMobile {...props} /> : <Texto {...props} />
}