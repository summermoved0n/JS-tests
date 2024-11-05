function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

function onClickChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${getRandomHexColor()}`;
}

colorBtn.addEventListener("click", onClickChangeColor);
