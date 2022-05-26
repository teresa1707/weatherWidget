

function getValue() {
  
 let input = document.getElementById("loc").value;
  
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=5d066958a60d315387d9492393935c19 `)
  .then((res) => res.json())
  .then((weather) => {console.log(weather);
      
      let date = document.querySelector(".date");
      //let time = document.querySelector(".time");
      let humidity = document.querySelector(".humidity");
      let pressure = document.querySelector(".pressure");
      let temperature = document.querySelector(".temp");
      let description = document.querySelector(".description");
      let speed = document.querySelector(".speed");
      let degree = document.querySelector(".deg");  
      let icon = document.querySelector(".icon");
      let city = document.querySelector(".city");
      
      city.innerHTML = ` ${weather.name} `;
      date.innerHTML = `Date : ${Date()} `;
      humidity.innerHTML = `Humidity : ${weather.main.humidity}`;
      pressure.innerHTML = `Pressure : ${weather.main.pressure} `;
      temperature.innerHTML = `Temperature : ${weather.main.temp} C°`;
      description.innerHTML = `${weather.weather[0].description}`;
      speed.innerHTML = `Wind speed : ${weather.wind.speed} m/s`;
      degree.innerHTML = `Wind direction : ${weather.wind.deg}`;
      icon.setAttribute("src", `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);

  });

  

};

  