const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
let grid = 0;

//Draw a column
const drawColumn = () => {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, 0);
  context.lineTo(width, grid);
  context.lineTo(0, grid);
  context.closePath();
  context.stroke();
};

//Draw a row
const drawRow = () => {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, height);
  context.lineTo(grid, height);
  context.lineTo(grid, 0);
  context.closePath();
  context.stroke();
};

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  const loop = () => {
    grid += 50;
    drawColumn();
    drawRow();
    loop();
  };
  loop();
}

// Iteration 2
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    context.clearRect(0, 0, width, height);
    this.row--;
  }
  moveDown() {
    context.clearRect(0, 0, width, height);
    this.row++;
  }
  moveRight() {
    context.clearRect(0, 0, width, height);
    this.col++;
  }
  moveLeft() {
    context.clearRect(0, 0, width, height);
    this.col--;
  }
}

// Iteration 3
function drawPlayer(col, row) {
  const playerImg = document.createElement("img");
  playerImg.onload = () => {
    context.drawImage(playerImg, col * 50, row * 50);
  };
  playerImg.src = "/images/character-down.png";
}

// Iteration 4
class Tresure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    return Math.floor(Math.random() * 10);
  }
}

Tresure.setRandomPosition();

function drawTreasure() {
  Tresure.setRandomPosition();
  const tresureImg = document.createElement("img");
  tresureImg.onload = () => {
    context.drawImage(tresureImg, col * 50, row * 50);
  };
  img.src = "/images/treasure.png";
}

function drawEverything() {
  //drawGrid();
  drawPlayer(1, 3);
  drawTreasure();
}

drawEverything();

/*const player = new Character(0, 0);

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2
*/
