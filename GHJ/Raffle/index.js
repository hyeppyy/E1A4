window.onload = function () {
  const startBtn = document.querySelector("#startBtn");
  startBtn.addEventListener("click", function () {
    raffle();
  });
};

function raffle() {
  const result = document.querySelector("#result");
  const bonus = document.querySelector("#bonus");
  const numbers = new Array(45).fill().map((arr, index) => {
    return index;
  }); // 1 부터 45까지의 숫자 만들기
  let selectNum = []; //7개 숫자
  let bonusNum = Math.floor(Math.random() * (numbers.length + 1)); // 보너스 숫자

  // 번호 무작위 출력
  for (let i = 1; i < 7; i++) {
    let number = Math.floor(Math.random() * numbers.length);
    selectNum.push(number);
  }

  // 1초마다 숫자들 출력하기
  for (let i = 0; i < selectNum.length; i++) {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = selectNum[i];
      result.append(ball);
    }, 1000 * (i + 1));
  }

  //보너스볼 출력
  setTimeout(() => {
    const bonusball = document.createElement("div");
    bonusball.className = "bonusball";
    bonusball.textContent = bonusNum;
    bonus.append(bonusball);
  }, 7000);
}
