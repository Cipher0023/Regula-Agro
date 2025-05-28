import React from "react"
import { FaWhatsapp } from "react-icons/fa";




function WhatsButton() {
    return (
    <div className="w-full h-12 px-4 flex-row flex items-center justify-center rounded-2xl bg-gray-100 text-gray-700 gap-2 text-md font-semibold cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out">
        <FaWhatsapp size={24} className="text-[#25D366]" />
        Compartilhe via Whatsapp
    </div>
    );
}

export default WhatsButton