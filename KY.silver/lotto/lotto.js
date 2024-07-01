function lottoFunc() {
    
    let numbers = []; // 랜덤 번호 생성, while : 반복문
    while (numbers.length < 6) { // 6 이하 반복, 숫자 바낌
        let num = Math.floor(Math.random() * 45) + 1; // math.floor : 소수점 버림
        if (!numbers.includes(num)) { 
            // ! : 논리 부정 연산자 (값을 반대로 반환함)
            //includes: numbers 에 num 이 포함되어 있는지 검사해줌
            // 여기서 논리 부정을 쓴 이유 ? 숫자가 반복되면 안되기때문
            numbers.push(num); // 배열에 num이 없으면 num 을 새롭게 생성해조
        }
    }
    numbers.sort((a, b) => a - b); // sort : 배열요소를 정렬해줌, a 와 b 를 비교해서 순서정렬(작은 숫자 앞으로)

    // 번호 하나씩 뜨게 함 (delay)
    let displayElement = document.getElementById("lotto-number-id");
    let circles = displayElement.querySelectorAll(".circle");

    circles.forEach((circle, index) => { // forEach : 배열메서드/요소마다 한번씩 제공된 함수를 실행시킴
        setTimeout(() => {
            circle.innerText = numbers[index]; // circle 요소에 나타낼 숫자들을 포함시킴(의마함?)
            circle.classList.add("show"); // 숫자 나타내기 위한 클래스 추가
        }, index * 500); // 0.5초 간격으로 번호 표시
    });
}

// 버튼 클릭 이벤트
// getElementByI : 특정 이벤트를 위해 html에서 가저옴
// click 할 시 lottoFunc 실행댐
document.getElementById("lotto-btn-id").addEventListener("click", lottoFunc);
