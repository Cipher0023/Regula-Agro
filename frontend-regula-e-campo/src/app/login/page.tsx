import React from "react";
import LogMenu from "@/components/loginMenu/logMenu";
import Link from "next/link";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] pt-15 h-screen">
      <img
        src="regulaEcampo.png"
        alt="logosite"
        className="rounded-full h-14 object-cover"
        loading="lazy"
      />
      <LogMenu />
      <div className="">
        login interno
        <Link
          href="/loginInterno"
          className="inline-block bg-green-800/30 px-6 py-2 border-2 hover:border-green-600 border-transparent rounded-full text-green-800 transition-colors duration-200"
        >
          test
        </Link>
      </div>
    </div>
  );
}
