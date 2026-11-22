import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./counter.jsx";
import WeatherCounter from "./weathercounter.jsx";

function WeatherPage() {
  // 날씨별 클릭 횟수를 함께 관리해 전체 반응 수를 계산
  const [counts, setCounts] = useState({
    Sunny: 0,
    Cloudy: 0,
    Rainy: 0,
    Snowy: 0,
  });

  // 각 날씨의 클릭 횟수를 모두 더함
  const totalCount = Object.values(counts).reduce(
    (total, count) => total + count,
    0,
  );

  // 클릭된 날씨의 횟수만 1 증가
  const handleReact = (weather) => {
    setCounts((currentCounts) => ({
      ...currentCounts,
      [weather]: currentCounts[weather] + 1,
    }));
  };

  return (
    <>
      {/* 전체 날씨 반응 수를 아이콘 위에 표시 */}
      <Counter totalCount={totalCount} />
      <div className="weather-list">
        <WeatherCounter
          pic="Sunny"
          count={counts.Sunny}
          onReact={() => handleReact("Sunny")}
        />
        <WeatherCounter
          pic="Cloudy"
          count={counts.Cloudy}
          onReact={() => handleReact("Cloudy")}
        />
        <WeatherCounter
          pic="Rainy"
          count={counts.Rainy}
          onReact={() => handleReact("Rainy")}
        />
        <WeatherCounter
          pic="Snowy"
          count={counts.Snowy}
          onReact={() => handleReact("Snowy")}
        />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherPage />
  </StrictMode>,
);
