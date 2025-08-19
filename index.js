const TILE = " . ";
const SIZE = 5;
const grid = [];

const map = createGrid();
displayGrid();

function createGrid() {
  let map = "";

  for (let i = 0; i < SIZE; i++) {
    // Création d'une ligne
    for (let i = 0; i < SIZE; i++) {
      map += TILE;
    }
    // Ajout d'un saut de ligne
    map += "\n";
  }

  return map;
}

function displayGrid() {
  console.log(map);
}
