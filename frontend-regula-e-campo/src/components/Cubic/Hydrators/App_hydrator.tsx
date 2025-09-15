"use client";
import React, { ReactNode, useEffect } from "react";
import { useCheckCre } from "@/hooks/useCheckCre";
import useNwsStore from "@/stores/useNwsStore";
import usePhtStore from "@/stores/usePhtStore";
import useTgtStore from "@/stores/useTgtStore";
import { useCheckDev } from "@/hooks/useCheckDev";
import { useCheckRdr } from "@/hooks/useCheckRdr";

export function AppHydrator({ children }: { children: ReactNode }) {
  // User hydration
  useCheckCre();
  useCheckDev();
  useCheckRdr();

  // Other domain hydrations
  const fetchNews = useNwsStore((s) => s.fetchNews);
  const fetchPhotos = usePhtStore((s) => s.fetchPhotos);
  const fetchTags = useTgtStore((s) => s.fetchTags);

  useEffect(() => {
    fetchNews();
    fetchPhotos();
    fetchTags();
  }, [fetchNews, fetchPhotos, fetchTags]);

  return <>{children}</>;
}
