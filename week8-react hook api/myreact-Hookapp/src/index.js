import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClickCounter from "./counter";
import EmojiCounter from "./EmojiCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickCounter />
    <EmojiCounter pic="Love" />
    <EmojiCounter pic="Sad" />
    <EmojiCounter pic="Like" />
  </StrictMode>,
);
