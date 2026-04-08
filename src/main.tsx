import { createRoot } from "react-dom/client";
import App from "./App";
import css from "./index.css?inline";

(function initChatbot() {
  const host = document.createElement("div");
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  // inject CSS
  const style = document.createElement("style");
  style.textContent = css;
  shadow.appendChild(style);

  // mount app
  const mount = document.createElement("div");
  shadow.appendChild(mount);

  createRoot(mount).render(<App />);
})();
