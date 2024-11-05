const incBtn = document.querySelector("[data-action=increment]");
const decBtn = document.querySelector("[data-action=decrement]");
const textSpan = document.querySelector("#value");

let counterValue = 0;

incBtn.addEventListener("click", () => {
  counterValue += 1;
  textSpan.textContent = counterValue;
});

decBtn.addEventListener("click", () => {
  counterValue -= 1;
  textSpan.textContent = counterValue;
});
