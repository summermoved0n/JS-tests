const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  const { dataset, value } = e.target;

  if (value.length === 0) {
    inputEl.classList.remove("invalid");
    return;
  }

  if (value.length >= dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return;
  }

  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
});
