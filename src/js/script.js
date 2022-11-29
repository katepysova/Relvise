const navBtn = document.querySelector(".nav__btn");
const headerEl = document.querySelector(".header");
const htmlEl = document.querySelector("html");

navBtn.addEventListener("click", () => {
  headerEl.classList.toggle("nav--open");
  htmlEl.classList.toggle("scrollable");
});
