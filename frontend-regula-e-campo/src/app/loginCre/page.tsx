import React from "react";
import LogCre from "@/components/loginMenu/loginCre";
import Link from "next/link";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] pt-30 h-screen">
      <img
        src="regulaEcampo.png"
        alt="logosite"
        className="rounded-full h-14 object-cover"
        loading="lazy"
      />
      <LogCre />
      <div className="p-2">
        login criador
        <Link
          href="/loginCre"
          className="inline-block bg-green-800/30 px-6 border-2 hover:border-green-600 border-transparent rounded-full text-green-800 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
