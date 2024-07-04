const numbers = Array(45)
  .fill()
  .map((n, i) => i++);

console.log(numbers);
const startBtn = document.querySelector(".random_Bt");
let selectNum = [];

// 추첨 버튼 이벤트 리스너
window.addEventListener("load", function restart_raffle() {
  startBtn.addEventListener("click", start_raffle);
});

function start_raffle() {
  raffle();

  startBtn.removeEventListener("click", start_raffle);
}

function raffle() {
  for (let i = 1; i < 8; i++) {
    let number = Math.floor(Math.random() * numbers.length);
    let randomNum = numbers.splice(number, 1);
    selectNum.push(randomNum);
  }

  console.log(selectNum);

  const bonusNum = selectNum.splice(6, 1);
  const winNums = selectNum.sort((a, b) => a - b);

  for (let i = 0; i < winNums.length; i++) {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = winNums[i];
      result.append(ball);
    }, 500 * (i + 1));
  }

  setTimeout(() => {
    const resetBtn = document.querySelector(".reset_Bt");
    const bonusBall = document.createElement("div");
    bonusBall.className = "ball";
    bonusBall.textContent = bonusNum;
    bonus.append(bonusBall);
    resetBtn.addEventListener("click", del_raffle);
  }, 3500);
}
// 리셋 버튼 이벤트 리스너
const reset_Btn = document.querySelector(".reset_Bt");
const start_Btn = document.querySelector(".random_Bt");
reset_Btn.addEventListener("click", del_raffle);
function del_raffle() {
  const ball = document.getElementsByClassName("ball");
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#bonus").innerHTML = "";
  reset_Btn.removeEventListener("click", del_raffle);
  start_Btn.addEventListener("click", start_raffle);
  selectNum = [];
}
