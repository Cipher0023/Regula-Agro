'use client';
import { useEffect, useState } from 'react';
import Destaques from './Destaques';
import DestaquesMobile from './DestaquesMobile';

export default function ResponsiveDestaques() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // roda ao carregar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) return null; // ou um loader ou nada

  return isMobile ? <DestaquesMobile /> : <Destaques />;
}