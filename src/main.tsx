import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(function initChatbot() {
  const mount = document.createElement("div");
  document.body.appendChild(mount);

  createRoot(mount).render(<App />);
})();
