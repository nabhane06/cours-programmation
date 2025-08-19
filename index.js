const TILE = {
  EMPTY: " . ",
  PLAYER: " P ",
  ENEMY: " E ",
  TREASURE: " $ ",
  TRAP: " X ",
};
const SIZE = 5;
const grid = [];

createGrid();
placePlayer();
displayGrid();

function createGrid() {
  for (let i = 0; i < SIZE; i++) {
    grid.push([]);

    // Création d'une ligne
    for (let j = 0; j < SIZE; j++) {
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
  grid[2][2] = TILE.PLAYER;
}

function displayGrid() {
  console.log("");
  for (let row of grid) {
    console.log(row.join(""));
  }
  console.log("");
}
