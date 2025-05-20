import React from "react"
import { Eye } from 'lucide-react'

interface SmbuttonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    padding?: string;
    rounded?: string;
}

export default function Smbutton({
    text,
    bgColor = "bg-neutral-200",
    textColor = "text-neutral-700",
    textSize = "text-sm",
    padding = "px-3",
    rounded = "rounded-full"
}: SmbuttonProps) {
    return (
    <div className={`w-fit h-8 flex items-center justify-center gap-2 ${bgColor} ${textColor} ${textSize} ${padding} ${rounded} font-semibold`}>
        <Eye size={20} />
        <span>{text}</span>
    </div>
    );
}
