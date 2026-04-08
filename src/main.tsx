import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(function initChatbot() {
  const host = document.createElement("div");
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  // Inject CSS into shadow DOM
  const style = document.createElement("style");
  style.textContent = `
    .chatbox-fixed {
      position: fixed;
      bottom: 1.25rem;
      right: 1.25rem;
      z-index: 9999;
    }

    .chatbox-panel {
      width: 320px;
      max-width: calc(100vw - 2rem);
      height: 420px;
    }

    /* Include Tailwind utilities needed */
    .w-14 { width: 3.5rem; }
    .h-14 { height: 3.5rem; }
    .rounded-full { border-radius: 9999px; }
    .bg-blue-500 { background-color: rgb(59 130 246); }
    .text-white { color: rgb(255 255 255); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1); }
    .bg-white { background-color: rgb(255 255 255); }
    .rounded-xl { border-radius: 0.75rem; }
    .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .overflow-hidden { overflow: hidden; }
    .justify-between { justify-content: space-between; }
    .p-3 { padding: 0.75rem; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    .overflow-y-auto { overflow-y: auto; }
    .flex-1 { flex: 1 1 0%; }
    .p-2 { padding: 0.5rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .max-w-\[80\%\] { max-width: 80%; }
    .self-end { align-self: flex-end; }
    .bg-gray-200 { background-color: rgb(229 231 235); }
    .text-xs { font-size: 0.75rem; line-height: 1rem; }
    .text-gray-400 { color: rgb(156 163 175); }
    .border-t { border-top-width: 1px; }
    .outline-none { outline: 2px solid transparent; outline-offset: 2px; }
    .text-blue-500 { color: rgb(59 130 246); }
    .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
  `;
  shadow.appendChild(style);

  const mount = document.createElement("div");
  shadow.appendChild(mount);

  createRoot(mount).render(<App />);
})();
