"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import Footer from "@/components/footer/footer";
import TopNotificationBar from "@/components/navbar/TopNotificationBar"; // <- Importação da barra de notificação
import "../app/globals.css";
import {
  useViewportContext,
  ViewportProvider,
} from "@/contexts/ViewportContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMobile } = useViewportContext();
  const pathname = usePathname();

  // Rotas onde a navbar deve ser escondida
  const hideNavbar = ["/login", "/perfil"].includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNotificationBar e Navbar FIXOS juntos */}
      {!hideNavbar && (
        <div
          className="fixed z-[100] w-full"
          style={{ top: "env(safe-area-inset-top)" }}
        >
          <TopNotificationBar />
          {isMobile ? <MobileNavbar /> : <Navbar />}
        </div>
      )}

      {/* Compensação de altura da TopNotificationBar + Navbar */}
      <div className={`${!hideNavbar ? "pt-[96px]" : ""} pb-20 min-h-[100vh]`}>
        <div className="mx-auto w-full max-w-[1216px] px-4 md:px-10">
          {children}
        </div>
      </div>

      {/* Rodapé */}
      {!hideNavbar && <Footer />}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className="w-screen overflow-x-hidden min-w-0 md:w-full md:overflow-x-visible md:min-w-full">
        <ViewportProvider>
          <LayoutContent>{children}</LayoutContent>
        </ViewportProvider>
      </body>
    </html>
  );
}
