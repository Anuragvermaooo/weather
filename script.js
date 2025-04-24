function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return alert("Please enter a city name");
  
    const url = `https://wttr.in/${city}?format=j1`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        const current = data.current_condition[0];
  
        document.getElementById("weatherCard").classList.remove("hidden");
        document.getElementById("cityName").innerText = city;
        document.getElementById("temperature").innerText = `${current.temp_C}°C`;
        document.getElementById("description").innerText = current.weatherDesc[0].value;
        document.getElementById("wind").innerText = `${current.windspeedKmph} km/h`;
        document.getElementById("humidity").innerText = `${current.humidity}%`;
        document.getElementById("rain").innerText = `${current.precipMM} mm`;
        document.getElementById("pressure").innerText = `${current.pressure} mb`;
        document.getElementById("uvIndex").innerText = `${current.uvIndex}`;
        document.getElementById("feelsLike").innerText = `${current.FeelsLikeC}°C`;
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
        alert("Could not fetch weather. Please check the city name or try again.");
        document.getElementById("weatherCard").classList.add("hidden");
      });
  }
  