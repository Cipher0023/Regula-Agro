'use client';

import { Smile, Share2 } from 'lucide-react';
import Commentbutton from '@/components/buttons/smButton/Commentbutton';
import ReactionButton from '@/components/buttons/smButton/Reactionbutton'; // ✅ IMPORTAÇÃO ADICIONADA

interface BottomBarNoticiaMobileProps {
  onCommentsClick: () => void;
}

export default function BottomBarNoticiaMobile({ onCommentsClick }: BottomBarNoticiaMobileProps) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 h-16 bg-white flex justify-around items-center md:hidden z-50"
      style={{ boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)' }}
    >
      <ReactionButton counts={{ like: 12, heart: 8, angry: 1, sad: 2, surprise: 4 }} variant="compact" />

      <button onClick={onCommentsClick}>
        <Commentbutton count={42} variant="compact" />
      </button>

      <button className="flex flex-col items-center text-xs text-gray-700">
        <Share2 size={20} />
        Compartilhar
      </button>
    </div>
  );
}
