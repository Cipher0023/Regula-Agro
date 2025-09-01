import React from "react";
import LogMenuInterno from "@/components/loginMenu/logMenuInterno";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] h-screen">
      <div className=""></div>
      <img
        src="regulaEcampo.png"
        alt="logosite"
        className="h-14 object-cover"
        loading="lazy"
      />
      <LogMenuInterno />
    </div>
  );
}
