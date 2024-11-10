//

const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
const count = document.getElementById("count");

let counter = 0;
let interval;

function updateDisplay() {
  count.textContent = counter;
}

resetBtn.onclick = function () {
  counter = 0;
  count.textContent = counter;
};

// Hold action buttons

function increment() {
  counter++;
  updateDisplay();
}

function decrement() {
  if (counter > 0) {
    counter--;
    updateDisplay();
  }
}

function startHold(action) {
  action();
  interval = setInterval(action, 200);
}

// Stop the hold action
function stopHold() {
  clearInterval(interval);
}

// Increment button events
incrementBtn.addEventListener("mousedown", () => startHold(increment));
incrementBtn.addEventListener("mouseup", stopHold);
incrementBtn.addEventListener("mouseleave", stopHold); // Stops if mouse leaves button

// Decrement button events
decrementBtn.addEventListener("mousedown", () => startHold(decrement));
decrementBtn.addEventListener("mouseup", stopHold);
decrementBtn.addEventListener("mouseleave", stopHold); // Stops if mouse leaves button
