"use client";
import React, { ReactNode, useEffect } from "react";
import { useCheckUser } from "@/hooks/useCheckCre";
import useNwsStore from "@/stores/useNwsStore";
import { useCheckDev } from "@/hooks/useCheckDev";

export function AppHydrator({ children }: { children: ReactNode }) {
  // User hydration
  useCheckUser();

  // Dev hydration
  useCheckDev();

  // Other domain hydrations
  const fetchNews = useNwsStore((s) => s.fetchNews);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return <>{children}</>;
}
