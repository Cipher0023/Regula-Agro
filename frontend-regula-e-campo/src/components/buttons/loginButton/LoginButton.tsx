import React from "react";
import Link from "next/link";

type Props = object;

function LoginButton({}: Props) {
  return (
    <div className="bg-gray-100/30 flex flex-row rounded-full p-1 items-center h-10 space-x-1">
      <div className="flex flex-col m-1 text-xs font-bold">
        <Link href="/login" className="">
          <div className="m-2 text-white hover:text-[#1B5E20] transition-colors duration-200">
            Login
          </div>
        </Link>
      </div>
      <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
    </div>
  );
}

export default LoginButton;
