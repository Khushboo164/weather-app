//Getting elements
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("weather-description");

// Button click event
searchBtn.addEventListener("click", () => {
    const userCity = cityInput.value;

    if (userCity === "") {
        alert("Please enter a city name");
        return;
    }

    // Showing sample data
    cityName.textContent = "City: " + userCity;
    temperature.textContent = "Temperature: 25°C";
    description.textContent = "Weather: Clear Sky";
});
