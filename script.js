const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");
const btn_submit = document.querySelector(".submit");
const btn_dismiss = document.querySelector(".dismiss");
const userEmail = document.querySelector("[data-email]");

function validateEmail(inp) {
  const email = inp.value;

  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === "") {
    return "This field is required";
  } else if (!regExp.test(email)) {
    return "Enter valid email";
  }
  clearError();
  return;
}

function subscribe(e) {
  e.preventDefault();
  const msg = validateEmail(emailInput);

  if (!msg) {
    showSuccessMessage(document.querySelector(".message_container"));
    return;
  }

  showError(msg);
}

function showError(msg) {
  errorMessage.textContent = msg;
  emailInput.classList.add("error_input");
}

function clearError() {
  errorMessage.textContent = "";
  emailInput.classList.remove("error_input");
}

function showSuccessMessage(elem) {
  userEmail.textContent = emailInput.value;
  elem.classList.add("open");
  document.querySelector(".container").classList.add("hide");
  emailInput.value = "";
}

function dismiss() {
  document.querySelector(".message_container").classList.remove("open");
  document.querySelector(".container").classList.remove("hide");
}

btn_submit.addEventListener("click", subscribe);

emailInput.addEventListener("input", () => validateEmail(emailInput));
btn_dismiss.addEventListener("click", dismiss);
