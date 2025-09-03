import React from "react";
import LogDev from "@/components/loginMenu/loginDev";

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
      <LogDev />
    </div>
  );
}
