// ===== Session 09 - Exercise 1: querySelector + toggle =====
// This file works with index.html (q1)

// Select elements
const toggleBtn = document.getElementById("toggle-btn");
const box = document.getElementById("box");

// Toggle class on click
toggleBtn.addEventListener("click", function () {
  box.classList.toggle("active");

  // Change button text based on state
  if (box.classList.contains("active")) {
    toggleBtn.textContent = "Hide Box";
  } else {
    toggleBtn.textContent = "Show Box";
  }
});

// Also demonstrate other classList methods
const demoBtn = document.getElementById("demo-btn");
if (demoBtn) {
  demoBtn.addEventListener("click", function () {
    box.classList.add("highlight");
    setTimeout(() => box.classList.remove("highlight"), 1000);
  });
}
