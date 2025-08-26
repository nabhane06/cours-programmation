const grid = require("./grid");
const player = require("./player");

startGame();

function startGame() {
  grid.createGrid();
  grid.placePlayer();
  displayGame();
}

function displayGame() {
  grid.displayGrid();
  console.log("");
  console.log("----------------------");
  console.log("PV: " + player.hp + " - Score: " + player.score);
  console.log("----------------------");
  console.log("(W A S D pour se deplacer)");
}
