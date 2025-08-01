# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🌤️ Weather Dashboard

A beautiful, modern weather application built with React and Vite that provides real-time weather information for any city worldwide.

![Weather Dashboard](https://img.shields.io/badge/React-19.0.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.2.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- 🌍 **Global Weather Data** - Get weather information for any city worldwide
- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔍 **Smart Search** - Intuitive search with helpful error messages
- 📊 **Detailed Weather Info** - Temperature, humidity, wind speed, pressure, and more
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🛡️ **Error Handling** - Comprehensive error handling for various scenarios
- 🌡️ **Temperature Details** - Current, feels-like, and min/max temperatures
- 💨 **Weather Conditions** - Visual weather icons and descriptions

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` file and replace `your_api_key_here` with your actual OpenWeatherMap API key
   - Get your free API key at: [OpenWeatherMap API](https://openweathermap.org/api)

4. **Start the development server**
   ```bash
   npm run dev
   ```
   or:
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## 📦 Dependencies

### Main Dependencies
- **React** (19.0.0) - JavaScript library for building user interfaces
- **React DOM** (19.0.0) - React package for working with the DOM
- **Axios** (1.8.4) - Promise-based HTTP client for API requests

### Development Dependencies
- **Vite** (6.2.0) - Fast build tool and development server
- **ESLint** - Code linting and quality checking
- **@vitejs/plugin-react** - Official Vite plugin for React

## 🌐 API Configuration

This app uses the OpenWeatherMap API to fetch weather data.

### Getting Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your account dashboard
4. Generate a new API key
5. Copy the API key to your `.env` file

### Environment Variables

The application requires the following environment variable:

```env
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

**Important Notes:**
- In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser
- Never commit your actual API key to version control
- The `.env` file is already included in `.gitignore` for security

## 🗂️ Project Structure

```
weather-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Search input component
│   │   └── WeatherCard.jsx     # Weather display component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── styles.css             # Global styles
├── .env                       # Environment variables (not in repo)
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
└── vite.config.js           # Vite configuration
```

## 🎨 Features in Detail

### Weather Information Displayed
- **Current Temperature** - Real-time temperature with location
- **Feels Like Temperature** - Apparent temperature
- **Min/Max Temperature** - Daily temperature range
- **Weather Description** - Current weather conditions
- **Humidity** - Air moisture percentage
- **Wind Speed** - Current wind speed
- **Atmospheric Pressure** - Barometric pressure
- **Cloud Cover** - Cloud coverage percentage

### Error Handling
- **City Not Found** - Clear message when location doesn't exist
- **Network Errors** - Handles connection issues gracefully
- **API Errors** - Specific messages for different API error codes
- **Invalid API Key** - Alerts when API key is missing or invalid
- **Rate Limiting** - Messages for too many requests

## 🔒 Security Best Practices

- API keys are stored in environment variables
- Sensitive data is not committed to version control
- Environment variables are properly prefixed for Vite
- Comprehensive input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**App won't start:**
- Make sure you have Node.js 16+ installed
- Run `npm install` to ensure all dependencies are installed
- Check that your `.env` file has the correct API key

**Weather data not loading:**
- Verify your API key is correct in the `.env` file
- Check your internet connection
- Ensure the API key has proper permissions

**Build errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for any console errors in the browser
- Ensure all dependencies are compatible

## 🔗 Useful Links

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Axios Documentation](https://axios-http.com/)

## 📧 Support

If you have any questions or run into issues, please feel free to:
- Open an issue on GitHub
- Check the existing issues for solutions
- Review the troubleshooting section above

---

**Made with ❤️ using React and Vite**
