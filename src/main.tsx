import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(function initChatbot() {
  const host = document.createElement("div");
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const mount = document.createElement("div");
  shadow.appendChild(mount);

  createRoot(mount).render(<App />);
})();
