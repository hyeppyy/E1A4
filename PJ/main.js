const numbers = Array(45)
  .fill()
  .map((n, i) => i++);

console.log(numbers);

let selectNum = [];

window.addEventListener("load", function () {
  const startBtn = document.querySelector(".random_Bt");
  startBtn.addEventListener("click", function () {
    raffle();
  });
});

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
    }, 1000 * (i + 1));
  }

  setTimeout(() => {
    const bonusBall = document.createElement("div");
    bonusBall.className = "ball";
    bonusBall.textContent = bonusNum;
    bonus.append(bonusBall);
  }, 7000);
}

// to-do-list
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value != "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
});
