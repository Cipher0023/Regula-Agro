'use client';
import React from 'react';

export default function TopNotificationBar() {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #1B5E20 0%, #257C2C 50%, #1B5E20 100%)',
        borderBottomColor: '#3E7741',
      }}
      className="text-white text-sm font-bold h-10 flex justify-center items-center gap-2 border-b"
    >
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />

      <a
        href="https://chat.whatsapp.com/H5NheNCRTinA6r6BcTIb7K?mode=ac_t"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-1 hover:text-gray-100"
      >
        Entre para nosso grupo do WhatsApp!
      </a>
    </div>
  );
}
