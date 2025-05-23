import React from "react"
import { FaLinkedinIn } from "react-icons/fa"



function SocialButton() {
    return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-[#1B5E20] text-white">
        <FaLinkedinIn />
    </div>
    );
}

export default SocialButton