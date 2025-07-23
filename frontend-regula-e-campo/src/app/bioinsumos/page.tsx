"use client";

import { useViewportContext } from "@/contexts/ViewportContext";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";
import DestaquesPorBadge from "@/components/homepage/DestaquesPorBadge";
import DestaquesMobilePorBadge from "@/components/homepage/DestaquesMobilePorBadge";
import NovidadesPorBadge from "@/components/homepage/NovidadesPorBadge";

export default function BioinsumosPage() {
  const { isMobile } = useViewportContext();
  const badgeType = "bioinsumos";

  if (isMobile) {
    return (
      <>
        <div className="pt-10 pb-10 flex justify-center items-center">
          <PropagandaWide />
        </div>

        <main className="flex flex-col gap-8 pt-4 pb-20">
          <DestaquesMobilePorBadge badgeType={badgeType} />
        </main>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex justify-center items-center p-10 ">
        <PropagandaWide />
      </div>

      <main className="flex flex-col w-full gap-8 pb-40 lg:px-0">
        <DestaquesPorBadge badgeType={badgeType} />
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full"></div>
        <NovidadesPorBadge badgeType={badgeType} />
      </main>
    </>
  );
}
