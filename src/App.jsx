import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './styles.css';

const App = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [city, setCity] = useState(''); 

    const fetchWeather = async (city) => {
        setLoading(true);
        setError('');

        try {
            const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
            
            if (!apiKey) {
                setError('API key not configured. Please check your environment variables.');
                setLoading(false);
                return;
            }

            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                }
            });

            const {
                main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
                weather: [{ description, icon }],
                wind: { speed },
                clouds: { all: cloudCover },
                sys: { country },
                name
            } = response.data;

            const weatherData = {
                temperature: temp,
                feelsLike: feels_like,
                tempMin: temp_min,
                tempMax: temp_max,
                pressure,
                humidity,
                description,
                icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                windSpeed: speed,
                cloudCover,
                country,
                city: name
            };

            setWeather(weatherData);
        } catch (error) {
            console.error('Weather API Error:', error);
            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        setError(`City "${city}" not found. Please check the spelling and try again.`);
                        break;
                    case 401:
                        setError('Invalid API key. Please check your configuration.');
                        break;
                    case 429:
                        setError('Too many requests. Please wait a moment and try again.');
                        break;
                    case 500:
                        setError('Weather service is temporarily unavailable. Please try again later.');
                        break;
                    default:
                        setError('Unable to fetch weather data. Please try again.');
                }
            } else if (error.request) {
                setError('Network error. Please check your internet connection and try again.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            fetchWeather(city);
        }
    }, [city]);

    return (
        <div className="app">
            <div className="header">
                <h1>🌤️ Weather Dashboard</h1>
                <p className="subtitle">Get real-time weather information for any city</p>
            </div>
            <SearchBar onSearch={(city) => { setCity(city); fetchWeather(city); }} />
            
            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Fetching weather data...</p>
                </div>
            )}
            
            {error && (
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <p className="error-message">{error}</p>
                </div>
            )}
            
            {weather && !loading && !error && (
                <WeatherCard weather={weather} />
            )}
        </div>
    );
};

export default App;