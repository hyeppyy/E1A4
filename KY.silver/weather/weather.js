$(document).ready(function () {

    // 날씨 조회 함수 정의
    function getWeather(city) {
        // API 요청
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4eeed0ee3dd4335f4fcf46deab517c99&units=metric`)
            .done(function (result) { 
                displayWeather(result); // 날씨 정보 표시
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('API 요청 실패: ', textStatus, errorThrown);
                alert('실패!');
            });
    }

    // 날씨 정보 표시 함수 정의
    function displayWeather(result) {
        // 기온의 소수점을 버림 Math.round 함수 사용
        const temp = Math.round(result.main.temp);
        const tempMin = Math.round(result.main.temp_min);
        const tempMax = Math.round(result.main.temp_max);
        
        $('#cityName').text(result.name);
        $('#currentTemp').text('현재 ' + temp + 'º');
        $('#minTemp').text('최저 ' + tempMin + 'º');
        $('#maxTemp').text('최고 ' + tempMax + 'º');

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

    // enter 키 사용 이벤트 추가
    $('#cityInput').keypress(function(event) { 
        if (event.key === 'Enter') {
            let city = $('#cityInput').val().trim();

            if (city === '') { 
                alert('지역 이름을 써조');
                return;
            }

            getWeather(city); 
        }
    });
    // 입력창에 입력을 했을 경우에만 css 효과가 나타나게! (평소 숨김 상태)
    $('#weatherInfo').hide(); 
});
