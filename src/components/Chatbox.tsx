import { useState } from "react";
import { useChat } from "../hooks/useChat";

export default function Chatbox() {
  const { messages, sendMessage, loading } = useChat();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="chatbox-fixed w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg"
        >
          💬
        </button>
      )}
      {open && (
        <div className="chatbox-fixed chatbox-panel bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-500 text-white p-3 flex justify-between">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto flex flex-col">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  m.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-gray-400">Đang trả lời...</div>
            )}
          </div>

          <div className="flex border-t">
            <input
              className="flex-1 p-2 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
            />
            <button
              onClick={() => {
                sendMessage(input);
                setInput("");
              }}
              className="px-3 text-blue-500"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
