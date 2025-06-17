'use client';

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import "../app/globals.css";
import MobileNavbar from "@/components/navbar/MobileNavbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // detecta na montagem
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="pt-BR">
      <body>
        <div className="sticky top-0 z-100">
          {isMobile ? <MobileNavbar /> : <Navbar />}
        </div>
        {children}
      </body>
    </html>
  );
}