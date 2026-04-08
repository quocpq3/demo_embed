import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Xin chào 👋 Tôi có thể giúp gì?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    // fake API
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Đây là phản hồi demo 🤖" },
      ]);
      setLoading(false);
    }, 1000);
  };

  return { messages, sendMessage, loading };
}
