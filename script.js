const btn = document.getElementById('btn1');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {

  
  

  let city=document.getElementById("cityName").value
  //let apiket ="2a*******************************"
  //myJson = fetch( "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2a*****************************")
  //.then(response => response.json())
  //.then((data) => console.log(data.coord.lon));
  async function getISS(){  
    const respons =  await fetch( "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2a6***************************");
    const data = await respons.json();

    document.getElementById("temprature").innerHTML = (data.main.temp + " °F");
    document.getElementById("description").innerHTML = data.weather[0].main
    document.getElementById("humidity").innerHTML = (data.main.humidity +" %");
    document.getElementById("wind").innerHTML =( data.wind.speed +" mps");
    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png"

  };

  getISS();


  document.getElementById("WE").innerHTML = "Weather in " +city + "";
  console.log(document.getElementById("cityName").value);
 




  
    

  



});



