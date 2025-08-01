import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
            setCity('');
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-bar">
                <div className="search-input-container">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city name (e.g., London, New York, Tokyo)"
                        required
                        className="search-input"
                    />
                </div>
                <button type="submit" className="search-button">
                    Get Weather
                </button>
            </form>
        </div>
    );
};

export default SearchBar;