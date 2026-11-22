import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ClickCounter from "./counter.jsx";
import EmojiCounter from "./EmojiCounter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickCounter />
    <EmojiCounter pic="Love" />
    <EmojiCounter pic="Sad" />
    <EmojiCounter pic="Like" />
  </StrictMode>,
);
