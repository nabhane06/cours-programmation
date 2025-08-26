const TILE = require("./tile");
const player = require("./player");
const grid = [];

function createGrid(size = 5) {
  for (let i = 0; i < size; i++) {
    grid.push([]);

    // Création d'une ligne
    for (let j = 0; j < size; j++) {
      const random = Math.random();
      if (random < 0.1) {
        grid[i].push(TILE.ENEMY);
      } else if (random < 0.2) {
        grid[i].push(TILE.TREASURE);
      } else if (random < 0.3) {
        grid[i].push(TILE.TRAP);
      } else {
        grid[i].push(TILE.EMPTY);
      }
    }
  }
}

function placePlayer() {
  grid[player.y][player.x] = TILE.PLAYER;
}

function displayGrid() {
  console.log("");
  for (let row of grid) {
    console.log(row.join(""));
  }
  console.log("");
}

module.exports = { createGrid, placePlayer, displayGrid };
