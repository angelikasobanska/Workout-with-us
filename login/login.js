var backdrop = document.querySelector(".backdrop");
var remindPassword = document.querySelector(".remind-password");
var passwordWindow = document.querySelector(".password-window");
var buttonEmailSubmit = document.querySelector(".button-email-submit");
var crossCircle = document.querySelector(".lni-cross-circle");

remindPassword.addEventListener("click", function () {
  passwordWindow.classList.add("open");
  backdrop.classList.add("open");
});

backdrop.addEventListener("click", function () {
  passwordWindow.classList.remove("open");
  closeWindow();
});

if (crossCircle) {
  crossCircle.addEventListener("click", closeWindow);
}

if (buttonEmailSubmit) {
  buttonEmailSubmit.addEventListener("click", closeWindow);
}

function closeWindow() {
  if (passwordWindow) {
    passwordWindow.classList.remove("open");
  }
  backdrop.classList.remove("open");
}
