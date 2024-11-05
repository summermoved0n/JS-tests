const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  e.target.value === ""
    ? (spanEl.textContent = "Anonymous")
    : (spanEl.textContent = e.target.value);
});
