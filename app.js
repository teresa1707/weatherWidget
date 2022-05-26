// class Weather {
//   constructor(date, time, humidity, pressure, temp, description, speed,src, deg /*, parent*/ ){
//     this.date = date;
//     this.time = time;
//     this.humidity = humidity;
//     this.pressure = pressure;
//     this.temp = temp;
//     this.description = description;
//     this.speed = speed;
//     this.src = src;
//     this.deg = deg; 
//     // this.parent = document.querySelector(parent);
//   }
//   render(){
//     let weather = document.querySelector(".weather");
//     let icon = document.querySelector(".icon");
//     let time = document.querySelector(".time");
//     let src = document.getElementsByTagName("src")

//     console.log(weather, icon, time, src)

//     weather.innerHTML = 

//   `<div class="weather">
//     <div class="date">${this.date}</div>
//     <div class="time">${this.time}</div>
//     <div class="humidity">${this.humidity}</div>
//     <div class="pressure">${this.pressure}</div>
//     <div class="temp">${this.temp}</div>
//     <div class="description">${this.description}</div>
//     <div class="speed">${this.speed}</div>
//     <div class="deg">${this.deg}</div>
//     <img class="icon" src="${this.src}">
    
//   </div>`;

//     // this.parent.append(div);

//   }
// }

// new Weather(
// this.date = "15.25.2022",
// this.time = "13.04",
// this.humidity = "weather.",
// this.pressure = "pressure;",
// this.temp = "temp;",
// this.description = "description;",
// this.speed = "speed;",
// this.src = "some",
// this.deg = "deg;",
// // this.div = ".weather"
// ).render();



function getValue() {
  
 let input = document.getElementById("loc").value;
  
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=5d066958a60d315387d9492393935c19 `)
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

  