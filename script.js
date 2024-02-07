const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const button = document.querySelectorAll("button");
const colorContainer = document.getElementsByClassName("color-container");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

colorContainer.addEventListener("click", () => {
  console.log("clicked");
});
