"use client";

import { useViewportContext } from "@/contexts/ViewportContext";
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
        <div className="flex justify-center items-center pt-10 pb-10">
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
      <div className="flex justify-center items-center p-10 w-full">
        <PropagandaWide />
      </div>

      <main className="flex flex-col gap-8 lg:px-0 pb-40 w-full">
        <Destaques />
        <div className="stroke-gray-100 border-gray-100 border-t border-b w-full"></div>
        <Novidades />
      </main>
    </>
  );
}
