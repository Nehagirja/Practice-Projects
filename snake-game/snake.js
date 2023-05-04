//board

var blockSize = 25;
var rows = 20;
var cols = 20;
var context;
var board;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//food
var foodX;
var foodY;

window.onload = function () {
  board = document.getElementById("board");
  board.height = blockSize * rows;
  board.width = blockSize * cols;
  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);
  update();
};

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);
  context.fillStyle = "lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
  if (e.code == "ArrowUp") {
  }
}
function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}
