import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="marquee">
      <span>
        🎉 HAPPY BIRTHDAY! 🎂 WOOHOO! 🎈 PARTY TIME! 🎊 HAPPY BIRTHDAY! 🎂
        WOOHOO! 🎈 PARTY TIME! 🎊
      </span>
    </div>
    <App />
  </StrictMode>
);
