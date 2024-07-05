let slides = document.querySelector(".slides");
var slide_list = [
  {
    id: 1,
    img_url:
      "https://muziktiger.hgodo.com/KOR/background/tigerenergy/ipad.jpeg",
    link: "",
  },
  {
    id: 2,
    img_url: "https://muziktiger.hgodo.com/KOR/background/tanghuru/ipad.jpeg",
    link: "",
  },
  {
    id: 3,
    img_url:
      "https://muziktiger.hgodo.com/KOR/background/Windownightscape/ipad.jpeg",
    link: "",
  },
  {
    id: 4,
    img_url: "https://muziktiger.hgodo.com/KOR/background/nomore/ipad_01.jpeg",
    link: "",
  },
  {
    id: 5,
    img_url:
      "https://muziktiger.hgodo.com/KOR/background/tripcarrier/ipad.jpeg",
    link: "",
  },
];
let slide = document.querySelectorAll(".slides li");
let current_idx = 0;
let slide_count = slide_list.length;
let prev_btn = document.querySelector(".prev");
let next_btn = document.querySelector(".next");
let slide_width = 423.72;
let slide_margin = 30;

slides.style.width = (slide_width + slide_margin) * slide_count + "px";

let slide_list_link = "";
for (let i = 0; i < slide_count; i++) {
  slide_list_link += `<li>
  <img src=${slide_list[i].img_url}
    alt=
    width=400
    height=300
  />
</li>`;
}
function slide_inner() {
  slides.innerHTML = slide_list_link;
}

slide_inner();

function move_slide(num) {
  slides.style.left = -num * 453.72 + "px";
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
