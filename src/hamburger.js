const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("overlay-visible");
  nav.classList.toggle("nav-active");
});
