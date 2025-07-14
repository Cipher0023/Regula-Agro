import React from "react";
import { MessageCircle } from "lucide-react";

interface CommentbuttonProps {
  count?: number;
  variant?: "default" | "compact"; // opcional — pode forçar manualmente
}

export default function Commentbutton({
  count = 0,
  variant,
}: CommentbuttonProps) {
  // Usar só a prop variant, default para "default"
  const resolvedVariant = variant ?? "default";

  if (resolvedVariant === "compact") {
    return (
      <div className="flex flex-col items-center justify-center text-neutral-800">
        <MessageCircle size={20} className="mb-1" />
        <span className="text-[12px] font-medium">Comentários ({count})</span>
      </div>
    );
  }

  return (
    <div className="w-fit h-8 flex items-center justify-center gap-1 bg-gray-100 text-neutral-800 text-xs px-3 rounded-full font-semibold">
      <MessageCircle size={16} />
      <span>{count}</span>
    </div>
  );
}
