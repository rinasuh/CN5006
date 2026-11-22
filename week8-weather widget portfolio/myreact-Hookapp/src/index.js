import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClickCounter from "./counter";
import WeatherCounter from "./weathercounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherCounter pic="Sunny" />
    <WeatherCounter pic="Cloudy" />
    <WeatherCounter pic="Rainy" />
    <WeatherCounter pic="Snowy" />
  </StrictMode>,
);
