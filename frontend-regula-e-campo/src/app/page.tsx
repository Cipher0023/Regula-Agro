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
        <div className="px-4 pt-4">
          <PropagandaWide />
        </div>

        <main className="flex flex-col gap-8 px-4 pt-4 pb-20">
          <DestaquesMobile />
        </main>

        <Footer />        
      </>
    );
  }

  // 💻 DESKTOP STRUCTURE
  return (
    <>
      <div className="max-w-[1136px] mx-auto bg ">
        <PropagandaWide />
      </div>

      <main className="flex flex-col max-w-[1136px] mx-auto gap-8 pb-40 px-10 lg:px-0">
        <Destaques />
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <Novidades />
      </main>

      <Footer />
    </>
  );
}