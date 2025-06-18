"use client";

import { createContext, useContext } from "react";
import { useViewport } from "@/hooks/useViewport";

const ViewportContext = createContext<ReturnType<typeof useViewport> | null>(
  null
);

export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const viewport = useViewport();

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewportContext = () => {
  const screenTypeContext = useContext(ViewportContext);
  if (!screenTypeContext) {
    throw new Error(
      "useViewportContext must be used within a ViewportProvider"
    );
  }
  return screenTypeContext;
};
