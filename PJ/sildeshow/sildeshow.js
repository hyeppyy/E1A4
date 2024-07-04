let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let current_idx = 0;
let slide_count = slide.length;
let prev_btn = document.querySelector(".prev");
let next_btn = document.querySelector(".next");
let slide_width = 400;
let slide_margin = 30;
slides.style.width = (slide_width + slide_margin) * slide_count + "px";

function move_slide(num) {
  slides.style.left = -num * 430 + "px";
  current_idx = num;
}

next_btn.addEventListener("click", () => {
  if (current_idx < slide_count - 1) {
    move_slide(current_idx + 1);
  } else {
    move_slide(0);
  }
});

prev_btn.addEventListener("click", () => {
  if (current_idx > 0) {
    move_slide(current_idx - 1);
  } else {
  }
});

setInterval(() => {
  if (current_idx < slide_count - 1) {
    move_slide(current_idx + 1);
  } else {
    move_slide(0);
  }
}, 5000);

setInterval();
