# Weather App

## Description

This is a weather application built with React that allows users to check the current weather and a week's forecast for a given location.

## Features

- **Search Functionality:** Users can enter a city name or city, country abbreviation to get weather information.
- **Temperature Unit Toggle:** Users can switch between Fahrenheit and Celsius for temperature display.
- **Current Weather Display:** Shows the current temperature, feels-like temperature, weather type, and additional information.
- **Weekly Forecast:** Displays a panel with the weather forecast for the upcoming week.
- **Error Handling:** Provides an error message for invalid city names.

## Components

1. **App Component (`App.js`):** The main component managing state and data fetching.
2. **HomePage Component (`HomePage.js`):** Renders the main content of the application, including the search bar and weather cards.
3. **MainWeatherCard Component (`MainWeatherCard.js`):** Displays the main weather information, including temperature, weather type, and additional details.
4. **SideWeatherCard Component (`SideWeatherCard.js`):** Renders a panel with the weather forecast for each day of the week.
5. **SearchBar Component (`SearchBar.js`):** Provides the search functionality and unit toggle button.
6. **WeatherIcon Component (`WeatherIcon.js`):** Renders weather icons.
7. **Error Component (`Error.js`):** Displays an error message for invalid city names.

## APIs Used

- [OpenWeatherMap API](https://openweathermap.org/api): Used for fetching weather data based on the provided location.

  ## Screenshots

![screenshot of weatherapp](https://github.com/pepelopezcode/weather-app-2/assets/98237174/0c8b2e4d-15cf-486c-8bbd-50c28ccce43b)
![screenshot of weatherapp error](https://github.com/pepelopezcode/weather-app-2/assets/98237174/b0e84767-06ea-4b2f-bbf5-93187eaf9c37)
