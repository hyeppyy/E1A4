// to-do-list
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value != "") {
    const li = document.createElement("li");
    const del = document.createElement("button");

    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  } else {
  }
});
