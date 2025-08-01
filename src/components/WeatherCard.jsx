import React from 'react';

const WeatherCard = ({ weather }) => {
    if (!weather) {
        return <div className="weather-card">Loading...</div>;
    }

    const {
        city,
        country,
        temperature,
        feelsLike,
        tempMin,
        tempMax,
        description,
        icon,
        humidity,
        windSpeed,
        pressure,
        cloudCover
    } = weather;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    return (
        <div className="weather-card">
            <div className="weather-header">
                <div className="location">
                    <h2 className="city-name">📍 {city}, {country}</h2>
                    <p className="last-updated">Last updated: {new Date().toLocaleTimeString()}</p>
                </div>
            </div>
            
            <div className="weather-main">
                <div className="temperature-section">
                    <img src={icon} alt={description} className="weather-icon" />
                    <div className="temperature-info">
                        <span className="temperature">{Math.round(temperature)}°C</span>
                        <p className="description">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
                        <p className="feels-like">Feels like {Math.round(feelsLike)}°C</p>
                    </div>
                </div>
                
                <div className="temp-range">
                    <span className="temp-high">↗️ {Math.round(tempMax)}°</span>
                    <span className="temp-low">↘️ {Math.round(tempMin)}°</span>
                </div>
            </div>
            
            <div className="weather-details">
                <div className="weather-detail">
                    <span className="detail-icon">💧</span>
                    <span className="detail-value">{humidity}%</span>
                    <span className="detail-label">Humidity</span>
                </div>
                <div className="weather-detail">
                    <span className="detail-icon">💨</span>
                    <span className="detail-value">{windSpeed} m/s</span>
                    <span className="detail-label">Wind Speed</span>
                </div>
                <div className="weather-detail">
                    <span className="detail-icon">🌡️</span>
                    <span className="detail-value">{pressure} hPa</span>
                    <span className="detail-label">Pressure</span>
                </div>
                <div className="weather-detail">
                    <span className="detail-icon">☁️</span>
                    <span className="detail-value">{cloudCover}%</span>
                    <span className="detail-label">Cloud Cover</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
