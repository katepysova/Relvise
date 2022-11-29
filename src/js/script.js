const navBtn = document.querySelector(".nav__btn");
const navElem = document.querySelector(".nav");
const htmlEl = document.querySelector("html");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navElem.classList.toggle("open");
  htmlEl.classList.toggle("u-static");
});
