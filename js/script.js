let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let rValue = document.querySelector('#redNumber');
let gValue = document.querySelector('#greenNumber');
let bValue = document.querySelector('#blueNumber');

window.onload = () => {
  red.addEventListener('input', changeRed);
  green.addEventListener('input', changeGreen);
  blue.addEventListener('input', changeBlue);
}

function changeRed(event) {
  rValue.value = event.target.value;
  changeColor();
}

function changeGreen(event) {
  gValue.value = event.target.value;
  changeColor();
}

function changeBlue(event) {
  bValue.value = event.target.value;
  changeColor();
}

function changeColor() {
  let r = rValue.value;
  let g = gValue.value;
  let b = bValue.value;
  let divColor = document.querySelector('#color');
  divColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}