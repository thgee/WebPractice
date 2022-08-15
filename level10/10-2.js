function draw(toX, toY) {
  context.beginPath();
  context.lineWidth = width.value;
  context.strokeStyle = lineColor.value;

  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();
}

function down(e) {
  fromX = e.offsetX;
  fromY = e.offsetY;

  dragging = true;
}

function up() {
  dragging = false;
}

function move(e) {
  if (dragging) {
    draw(e.offsetX, e.offsetY);
  }
  fromX = e.offsetX;
  fromY = e.offsetY;
}

function out() {
  dragging = false;
}

function bgChange() {
  canvas.style.backgroundColor = bgColor.value;
}

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
let dragging = false;
let lineColor = document.querySelector("#lineColor");
let bgColor = document.querySelector("#bgColor");
let width = document.querySelector("#width");

canvas.addEventListener("mousedown", down);
canvas.addEventListener("mouseup", up);
canvas.addEventListener("mousemove", move);
canvas.addEventListener("mouseout", out);
bgColor.addEventListener("change", bgChange);
