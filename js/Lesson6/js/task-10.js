function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const conteinerEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

let number = 0;
let width = 30;
let height = 30;

function createBoxes(amount) {
  const number = Number(amount);
  let str = "";

  for (let i = 1; i <= number; i += 1) {
    str += `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px"; padding: '4px 0';></div>`;

    width += 10;
    height += 10;
  }

  return str;
}

function destroyBoxes() {
  conteinerEl.innerHTML = "";
}

inputEl.addEventListener("input", (e) => {
  number = e.target.value;
});

createBtn.addEventListener("click", (e) => {
  const newElement = createBoxes(number);
  conteinerEl.insertAdjacentHTML("beforeend", newElement);
});

destroyBtn.addEventListener("click", destroyBoxes);
