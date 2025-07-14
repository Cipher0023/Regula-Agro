import React from "react"
import { Eye } from 'lucide-react'

interface ViewbuttonProps {
  count?: number;
}

export default function Viewbutton({ count = 0 }: ViewbuttonProps) {
  return (
    <div className="w-fit h-8 flex items-center justify-center gap-1 bg-gray-100 text-neutral-800 text-xs px-3 rounded-full font-semibold">
      <Eye size={16} />
      <span>{count}</span>
    </div>
  );
}
