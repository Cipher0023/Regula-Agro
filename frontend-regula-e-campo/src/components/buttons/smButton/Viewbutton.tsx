import React from "react"
import { Eye } from 'lucide-react'

interface ViewbuttonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    padding?: string;
    rounded?: string;
}

export default function Viewbutton({
    text,
    bgColor = "bg-gray-100",
    textColor = "text-neutral-800",
    textSize = "text-sm",
    padding = "px-3",
    rounded = "rounded-full"
}: ViewbuttonProps) {
    return (
    <div className={`w-fit h-8 flex items-center justify-center gap-2 ${bgColor} ${textColor} ${textSize} ${padding} ${rounded} font-semibold`}>
        <Eye size={20} />
        <span>{text}</span>
    </div>
    );
}
