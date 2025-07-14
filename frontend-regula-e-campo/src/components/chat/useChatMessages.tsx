// useChatMessages.ts
import { useState } from "react";
import { Message } from "./MessageItem";

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage: Message = {
      id: Date.now(),
      name: "Você",
      avatar: "https://i.pravatar.cc/150?img=10",
      text: input,
      likes: 0,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleLike = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
      )
    );
  };

  return { messages, input, setInput, handleSend, handleLike };
}