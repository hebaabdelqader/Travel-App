# Travel App
# Author: Heba Sameer Abdelqader

A web application designed for planning and managing trips, integrating various APIs to deliver comprehensive travel details such as weather, images, and more.

## Features

- **Fetch  Data**: Obtains location details.
- **Weather Forecast**: Supplies weather information for the trip.
- **Image**: Fetches location images via the Pixabay API.
- **Add End Date**: Calculates and shows the trip duration.
- **Local Storage**: Preserves trip data for future reference.

## Getting Started

### Prerequisites

This project was developed using Node.js version 20.11.1. 

### API 
This project is using this API:
Weatherbit API: Retrieves weather data using latitude and longitude coordinates provided by the Geonames API.
Pixabay API: Fetches images related to specific destinations or countries.
Geonames API: Supplies latitude and longitude information for given locations.

### Installation


1. **Install dependencies**

    ```bash
    npm install
    ```

### Development

- **Build for development**

    ```bash
    npm run build
    npm run dev
    ```

- **Start the server**

    ```bash
    npm start
    ```

### Testing

- **Run tests**

    ```bash
    npm test

**API keys**
Set Up Environment Variables Create a .env file in the root of your project directory with the following content:

fetchCoordinatesKey=your_pixabay_key
fetchWeatherKey=your_weatherbit_key
fetchImageKey=your-Geaonnames-username

## Usage

1. Open the application in your browser.
2. Enter a location and date to get trip details.
3. View weather forecasts, images, and trip length.




