// ===== Session 09 - Exercise 3: Burger Menu =====

const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("open");
  burgerBtn.classList.toggle("active");
});

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    burgerBtn.classList.remove("active");
  });
});

// Close menu on outside click
document.addEventListener("click", function (e) {
  if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("open");
    burgerBtn.classList.remove("active");
  }
});
