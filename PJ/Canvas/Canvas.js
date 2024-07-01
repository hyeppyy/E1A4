//캔버스 만들기
const canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;
canvas.style.border = "1px solid black";

// mouse event
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousemove", function (e) {
  mouseMove(e);
});
canvas.addEventListener("mousedown", function (e) {
  mouseDown(e);
});
canvas.addEventListener("mouseup", function (e) {
  mouseUp(e);
});
canvas.addEventListener("mouseout", function (e) {
  mouseOut(e);
});

let startX = 0;
let startY = 0;
let drawing = false;
ctx.lineWidth = 4;
ctx.strokeStyle = "black";

function draw(curX, curY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(curX, curY);
  ctx.stroke();
}

function mouseDown(e) {
  startX = e.offsetX;
  startY = e.offsetY;
  drawing = true;
}

function mouseMove(e) {
  if (!drawing) return;
  let curX = e.offsetX;
  let curY = e.offsetY;
  draw(curX, curY);
  startX = curX;
  startY = curY;
}

function mouseUp(e) {
  drawing = false;
}

function mouseOut(e) {
  drawing = false;
}
