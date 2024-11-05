const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return window.alert("Please fill in all fields!");
  }

  console.log({ email, password });

  form.reset();
}
