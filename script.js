const form = document.querySelector(".form");

const controlString = document.querySelector("#control_string");
const newPassword = document.querySelector("#new_password");
const passwordCheck = document.querySelector("#password_check");

const inputControlWordError = document.querySelector(".inputControlWordError");
const inputPasswordError = document.querySelector(".inputPasswordError");
const inputPasswordCheckError = document.querySelector(
  ".inputPasswordCheckError"
);

const inputFieldEyeElement = document.querySelector(".form__icon_eye");

const checkControlWord = () => {
  let controlWord = "abc";
  if (controlString.value !== controlWord) {
    inputControlWordError.textContent = "Неверное контрольное слово";
    controlString.style.borderBottom = "1px solid #FFB6C1";
  } else {
    inputControlWordError.textContent = "";
    controlString.style.borderBottom = "1px solid #2B689B";
  }
};

const checkPasswordLength = () => {
  if (newPassword.value.length < 6) {
    inputPasswordError.textContent = "Пароль должен быть не менее 6 символов";
    newPassword.style.borderBottom = "1px solid #FFB6C1";
  } else {
    inputPasswordError.textContent = "";
    newPassword.style.borderBottom = "1px solid #2B689B";
  }
};

const checkPasswordMatch = () => {
  if (newPassword.value !== passwordCheck.value) {
    inputPasswordCheckError.textContent = "Пароли не совпадают";
    passwordCheck.style.borderBottom = "1px solid #FFB6C1";
  } else {
    inputPasswordCheckError.textContent = "";
    passwordCheck.style.borderBottom = "1px solid #2B689B";
  }
};

newPassword.addEventListener("input", checkPasswordLength);

passwordCheck.addEventListener("input", checkPasswordMatch);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkControlWord();
  checkPasswordLength();
  checkPasswordMatch();
});

// Password visibility
inputFieldEyeElement.addEventListener("click", function () {
  if (newPassword.type === "password" && passwordCheck.type === "password") {
    newPassword.type = "text";
    passwordCheck.type = "text";
  } else if (newPassword.type === "text" && passwordCheck.type === "text") {
    newPassword.type = "password";
    passwordCheck.type = "password";
  }
});
