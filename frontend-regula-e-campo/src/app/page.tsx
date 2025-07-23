"use client";

import { useViewportContext } from "@/contexts/ViewportContext";
import Footer from "@/components/footer/footer";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";
import Destaques from "@/components/homepage/Destaques";
import DestaquesMobile from "@/components/homepage/DestaquesMobile";
import Novidades from "@/components/homepage/Novidades";

export default function Home() {
  const { isMobile } = useViewportContext();

  if (isMobile) {
    // 📱 MOBILE STRUCTURE
    return (
      <>
        <div className="pt-10 pb-10 flex justify-center items-center">
          <PropagandaWide />
        </div>

        <main className="flex flex-col gap-8 pt-4 pb-20">
          <DestaquesMobile />
        </main>   
      </>
    );
  }

  // 💻 DESKTOP STRUCTURE
  return (
    <>
      <div className="w-full flex justify-center items-center p-10 ">
        <PropagandaWide />
      </div>

      <main className="flex flex-col w-full gap-8 pb-40 lg:px-0 ">
        <Destaques />
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <Novidades />
      </main>

      
    </>
  );
}