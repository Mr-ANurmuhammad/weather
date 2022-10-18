const elForm = document.querySelector(".form");
const elContainer = document.querySelector(".container");
const elSearchButton = document.querySelector(".search-button");
const elSearchInput = document.querySelector(".search-input");
const elError = document.querySelector(".not-found");
const elWeatherBox = document.querySelector(".weather-box");
const elWeatherDetails = document.querySelector(".weather-details");
const elWrapper = document.querySelector(".wrapper");



elForm.addEventListener("submit", function (event) {
   event.preventDefault();

   const APIKey = "00d26c3fd588f556b9b3678c97a78b0e"
   const elInputVal = elSearchInput.value;


   if (elInputVal === "")
   return;


   fetch( `https://api.openweathermap.org/data/2.5/weather?q=${elInputVal}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {

         if(json.cod === "404") {

            elContainer.style.height = "400px";

            elWeatherBox.style.display = "none";
            elWeatherDetails.style.display = "none";

            elError.style.display = "block";
            elError.classList.add("fadeIn");

            return;

         }

         elError.style.display = "none";
         elError.classList.remove("fadeIn");


         const elClearSky = document.querySelector(".clear-sky");
         const elTemperature = document.querySelector(".temperature");
         const elDescription = document.querySelector(".description");
         const elHumidity = document.querySelector(".humidity span");
         const elWind = document.querySelector(".wind span");


         switch (json.weather[0].main) {
            case "Clear":
                  Image.src = "images/sun.png";
               break;

            case "Clouds":
                  Image.src = "images/clouds.jpg";
               break;

            case "Rain":
                  Image.src = "images/rainy.png";
               break;

            case "Haze":
                  Image.src = "images/mist.jpg";
               break;

            case "Snow":
                  Image.src = "images/Snow.png";
               break;

            default:
                  Image.src = " ";        
             }

         elTemperature.innerHTML = `${parseInt(json.main.temp)} <span> C</span>`;
         elDescription.innerHTML = `${json.weather[0].description}`;
         elHumidity.innerHTML = `${json.main.humidity}%`;
         elWind.innerHTML = `${parseInt(json.wind.speed)} km/h`;

         elWeatherBox.style.display = "";
         elWeatherDetails.style.display = "";
         elWeatherBox.classList.add("fadeIn");
         elWeatherDetails.classList.add("fadeIn");


         elContainer.style.height = "600px"

         
      })

      elInputVal.innerHTML = " ";
      
});