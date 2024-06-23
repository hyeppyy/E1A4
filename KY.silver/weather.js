$(document).ready(function() {
    // 날씨 조회 함수 정의
    function getWeather(city) {
        // API 요청해서 가져옴 (사이트에서 내 고유 key 필요)
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4eeed0ee3dd4335f4fcf46deab517c99&units=metric`)
            .done(function (result) { 
                displayWeather(result); // 날씨 정보 표시 함수 호출
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('API 요청 실패: ', textStatus, errorThrown);
                alert('실패!');
            });
    }

    // 날씨 정보 표시 함수 정의
    function displayWeather(result) {
        $('#cityName').text(result.name);
        $('#currentTemp').text('현재 기온 ' + result.main.temp + 'º');
        $('#minTemp').text('최저 기온 ' + result.main.temp_min + 'º');
        $('#maxTemp').text('최고 기온 ' + result.main.temp_max + 'º');

        let measurementTime = new Date(result.dt * 1000);
        let hours = measurementTime.getHours();
        let minutes = measurementTime.getMinutes();
        $('#currentTime').text('현재 시간 ' + hours + ':' + minutes);

        let iconUrl = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
        $('#weatherIcon').html(`<img src="${iconUrl}">`);

        // 입력 했을 시 배경색과 함께 리스트 출력
        $('#weatherInfo').css('background-color', 'rgba(255, 255, 255, 0.3)').show();
    }

    // 버튼 클릭 이벤트 추가
    $('#weatherButton').click(function() {
        let city = $('#cityInput').val().trim();

        if (city === '') { // 값이 없으면 알림창
            alert('지역 이름을 써조');
            return;
        }

        getWeather(city); // 날씨 조회 함수 호출
    });

    $('#cityInput').keypress(function(event) { // enter 키 사용
        if (event.key === 'Enter') {
            let city = $('#cityInput').val().trim(); // 함수내용이 button 클릭 이벤트와 일치해서 같은내용써줘야함!

            if (city === '') { 
                alert('지역 이름을 써조');
                return;
            }

            getWeather(city); 
        }
    });

    $('#weatherInfo').hide(); // 입력창에 입력을 했을 경우에만 css 효과가 나타나게! (평소 숨김 상태)
});
