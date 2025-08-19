const TILE = " . ";
const SIZE = 5;

const grid = [];

createGrid();

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

  // Affichage de la map
  console.log(map);
}
