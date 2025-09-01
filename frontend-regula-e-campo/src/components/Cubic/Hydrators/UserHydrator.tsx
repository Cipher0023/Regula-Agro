"use client";
import { ReactNode } from "react";
import { AppHydrator } from "./App_hydrator";

export function UserHydrator({ children }: { children: ReactNode }) {
  // Compat: delega toda hidratação para o AppHydrator
  return <AppHydrator>{children}</AppHydrator>;
}
