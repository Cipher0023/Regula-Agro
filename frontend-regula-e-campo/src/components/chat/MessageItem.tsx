'use client';

import { ThumbsUp } from "lucide-react";

export interface Message {
  id: number;
  name: string;
  avatar: string;
  text: string;
  likes: number;
  createdAt: string;
  onLike?: (id: number) => void;
}

function getDaysAgo(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function MessageItem({ id, name, avatar, text, likes, createdAt, onLike }: Message) {
  return (
    <div className="flex items-start gap-3">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-sm text-gray-800">{name}</span>
          <span className="text-xs text-gray-500">
            {getDaysAgo(createdAt) === 0
              ? "Hoje"
              : `Há ${getDaysAgo(createdAt)} dia${getDaysAgo(createdAt) > 1 ? "s" : ""}`}
          </span>
        </div>

        <div className="bg-gray-100 p-3 rounded-2xl mt-1">
          <p className="text-gray-700">{text}</p>
        </div>

        <button
          onClick={() => onLike?.(id)}
          className="mt-2 text-gray-500 hover:text-blue-600 flex items-center gap-1 text-sm"
        >
          <ThumbsUp size={16} />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}