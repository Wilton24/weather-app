const apiKey = `3acdb0910021853157a4ae0ebb20c61b`;
const cityInput = document.getElementById('city');
const getWeatherBtn = document.getElementById('get-weather-button')
const details = document.querySelector('.details');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const cityName = document.querySelector('.lugar');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.weather-icon');





const getWeatherData = async ()=>{
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`,{
      method: 'GET'
    });
    if(!response=='ok'){
      throw new Error(`Bulok ka'g internet!`);
    }
    const data = await response.json();
    
    weather.style.display = 'block';
    const temperature = Math.round(data.main.temp);

    icon.src = `../images/${data.weather[0].main}.png`
    temp.innerHTML = `${temperature}°C`;
    cityName.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed}m/s`
    console.log(data);
  }
  catch(terrorist){
    icon.src = '../images/italian_hand.png';

  }

}


getWeatherBtn.addEventListener('click', getWeatherData);
// window.body.addEventListener('keyup',(event)=>{
//   if(event.key == 'Enter'){
//     getWeatherData();
//   }
// })



// Hi git :D