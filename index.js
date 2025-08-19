const TILE = " . ";
const SIZE = 5;
const grid = [];

// Il faut créer :
// const grid = [
//   [TILE, TILE, TILE, TILE, TILE], // 0
//   [TILE, TILE, TILE, TILE, TILE], // 1
//   [TILE, TILE, TILE, TILE, TILE], // 2
//   [TILE, TILE, TILE, TILE, TILE], // 3
//   [TILE, TILE, TILE, TILE, TILE], // 4
// ]

constcreateGrid();
displayGrid();

function createGrid() {
  for (let i = 0; i < SIZE; i++) {
    grid.push([]);

    // Création d'une ligne
    for (let j = 0; j < SIZE; j++) {
      grid[j].push(TILE);
    }
  }
}

function displayGrid() {
  console.log(map);
}
