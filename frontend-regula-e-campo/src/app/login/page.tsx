import React from "react";
import LogMenu from "@/components/loginMenu/logMenu";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col bg-[#ffffff] items-center justify-center h-screen">
      <LogMenu />
    </div>
  );
}
