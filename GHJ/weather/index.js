window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

const fail = () => {
  alert("좌표를 받아올 수 없음");
};

const API_KEY = "9d04066879e78685fbab216b214ad614";

const getWeather = (latitude, longitude) => {
  //fetch ( ) 로 서버에 데이터를 요청
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
  )
    //.then:서버에서 데이터를 가져오는 작업(응답)이 완료된 이후에 then의 인자에 들어가있는 함수가 실행
    //response 객체는 fetch를 통해서 요청했을 때 웹서버가 응답한 결과를 담고있는 객체데이터이며,
    //객체 안에는 여러가지의 속성값을 통해서 서버와 통신 시 어떠한 상태로 통신이 이루워져있는지 알 수 있는 다양한 단서들이 들어있다.
    .then(function (response) {
      //fetch()를 사용하면 응답 데이터를 JSON으로 인코딩해야 사용할 수 있다.
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const wind = json.wind.speed;
      const minTemp = json.main.temp_min;
      const maxTemp = json.main.temp_max;
      const description = json.weather[0].description;

      console.log(json); // json 데이터 로그

      document.querySelector(".lat").innerText = latitude;
      document.querySelector(".lon").innerText = longitude;
      document.querySelector(".place").innerText = place;
      document.querySelector(".temp").innerText = temperature;
      document.querySelector(".minTemp").innerText = `최저기온: ${minTemp}`;
      document.querySelector(".maxTemp").innerText = ` 최고기온: ${maxTemp}`;
      document.querySelector(".wind").innerText = wind;
      document.querySelector(".description").innerText = description;
    });
};
