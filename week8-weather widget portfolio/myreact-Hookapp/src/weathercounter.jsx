import { useState, useEffect } from "react";
import sunny from "./sunny.png";
import cloudy from "./cloudy.png";
import rainy from "./rainy.png";
import snowy from "./snowy.png";

function WeatherCounter({ pic: SelectedWeather, count, onReact }) {
  const [image, setImage] = useState(sunny);

  useEffect(() => {
    const WeatherImages = {
      Sunny: sunny,
      Cloudy: cloudy,
      Rainy: rainy,
      Snowy: snowy,
    };

    setImage(WeatherImages[SelectedWeather] || sunny);
  }, [SelectedWeather]);
  return (
    <div className="App">
      {/* Icon and label vertical layout */}
      <p className="weather-item">
        <button className="weather-button" type="button" onClick={onReact}>
          {count}
          {/* Adjust the icon size and position in the CSS */}
          <img className="weather-icon" src={image} alt={SelectedWeather} />
        </button>
        {/* show weather label under the icon */}
        <span className="weather-label">{SelectedWeather}</span>
      </p>
      <p>&nbsp;</p>
    </div>
  );
}

export default WeatherCounter;
