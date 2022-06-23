let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let incrementButton = document.getElementById("increment-btn");
let decrementButton = document.getElementById("decrement-btn");

window.onload = function () {
  if (count >= 10) document.getElementById("increment-btn").disabled = true;
  if (count > 0) document.getElementById("decrement-btn").disabled = false;
  if (count == 0) document.getElementById("decrement-btn").disabled = true;
  if (count < 10) document.getElementById("increment-btn").disabled = false;
};

function increment() {
  if (count <= 9) {
    count += 1;
  }
  countEl.textContent = count;
  if (count >= 10) incrementButton.disabled = true;
  if (count > 0) decrementButton.disabled = false;
}
function decrement() {
  if (count > 0) count -= 1;
  countEl.textContent = count;
  if (count <= 0) decrementButton.disabled = true;
  if (count < 10) incrementButton.disabled = false;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  decrementButton.disabled = true;
  incrementButton.disabled = false;
}

function reset() {
  countEl.textContent = 0;
  count = 0;
  saveEl.textContent = "";
  incrementButton.disabled = false;
  decrementButton.disabled = true;
}
