"use client";

import Navbar from "@/components/navbar/Navbar";
import "../app/globals.css";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import {
  useViewportContext,
  ViewportProvider,
} from "@/contexts/ViewportContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMobile } = useViewportContext();
  return (
    <>
      <div className="sticky top-0 z-[100] w-full">
        {isMobile ? <MobileNavbar /> : <Navbar />}
      </div>
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden">
        <ViewportProvider>
          <LayoutContent>{children}</LayoutContent>
        </ViewportProvider>
      </body>
    </html>
  );
}
