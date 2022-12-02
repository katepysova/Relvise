const navBtn = document.querySelector(".nav__btn");
const navElem = document.querySelector(".nav");
const htmlEl = document.querySelector("html");

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        top: 40,
      });
    }

    if (navBtn.classList.contains("open")) {
      navBtn.classList.remove("open");
    }
    if (navElem.classList.contains("open")) {
      navElem.classList.remove("open");
    }
    if (htmlEl.classList.contains("u-static")) {
      htmlEl.classList.remove("u-static");
    }
  });
});

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open");
  navElem.classList.toggle("open");
  htmlEl.classList.toggle("u-static");
});
