// ===== Session 09 - Exercise 2: Click Counter =====

let count = 0;

const countDisplay = document.getElementById("count-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
  countDisplay.textContent = count;

  // Change color based on value
  if (count > 0) {
    countDisplay.style.color = "#4CAF50";
  } else if (count < 0) {
    countDisplay.style.color = "#f44336";
  } else {
    countDisplay.style.color = "#333";
  }
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", function () {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
