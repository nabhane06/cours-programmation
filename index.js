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
displayGrid();

function createGrid() {
  for (let i = 0; i < SIZE; i++) {
    grid.push([]);

    // Création d'une ligne
    for (let j = 0; j < SIZE; j++) {
      grid[i].push(TILE.EMPTY);
    }
  }
}

function displayGrid() {
  for (let row of grid) {
    console.log(row.join(""));
  }
}
