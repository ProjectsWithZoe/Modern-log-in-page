const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signinBtn = document.getElementById("signin");
const buttons = document.querySelectorAll("button");
const redColor = document.getElementById("red-color");
const blueColor = document.getElementById("blue-color");
const greenColor = document.getElementById("green-color");
const orangeColor = document.getElementById("orange-color");
const colors = document.querySelectorAll(".color");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function changeButtonColors(color) {
  buttons.forEach((button) => {
    button.style.backgroundColor = color;
  });
}
function changeToggleColor(color) {
  const toggleElements = document.querySelectorAll(".toggle");

  toggleElements.forEach((toggleElement) => {
    toggleElement.style.background = `linear-gradient(to right, grey, ${color}`;
  });
}

colors.forEach((color) => {
  color.addEventListener("click", (event) => {
    const computedStyle = window.getComputedStyle(color);
    const clickedColor = computedStyle.backgroundColor;
    changeButtonColors(clickedColor);
    changeToggleColor(clickedColor);
  });
});
