import React from "react"

interface BadgeProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    textSize?: string;
    padding?: string;
    rounded?: string;
}

export default function Badge({
    text,
    bgColor = "bg-[#E3F2FD]",
    textColor = "text-[#1565C0]",
    textSize =  "text-sm",
    padding = "px-3",
    rounded = "rounded-full"
    
}: BadgeProps) {
    return(
        <div className={`w-fit h-8 items-center justify-center inline-flex ${bgColor} ${textColor} ${textSize} ${padding} ${rounded} font-semibold`}>{text}
    </div>
    );
}








