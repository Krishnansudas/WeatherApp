const CurrentWeather = ({ currentWeather }) => {
  const temperature = currentWeather.temperature ?? "--";
  const description = currentWeather.description ?? "Checking sky conditions";
  const locationName = currentWeather.locationName ?? "Your city";
  const weatherIcon = currentWeather.weatherIcon ?? "clear";

  return (
    <div className="current-weather">
      <div className="current-weather-top">
        <div>
          <p className="current-label">Right now</p>
          <h2 className="location-name">{locationName}</h2>
        </div>
        <span className="current-badge">Live</span>
      </div>
      <img src={`icons/${weatherIcon}.svg`} className="weather-icon" alt={description} />
      <h2 className="temperature">
        {temperature} <span>°C</span>
      </h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default CurrentWeather;