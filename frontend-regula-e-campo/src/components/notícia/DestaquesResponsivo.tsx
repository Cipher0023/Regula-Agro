"use client";
import Destaques from "./Destaques";
import DestaquesMobile from "./DestaquesMobile";
import { useViewportContext } from "@/contexts/ViewportContext";

export default function ResponsiveDestaques() {
  const { isMobile } = useViewportContext();

  return isMobile ? <DestaquesMobile /> : <Destaques />;
}
