const TILE = " . ";
const SIZE = 5;

const grid = [];
let map = "";

// CREER UNE MAP CARREE
// 1/ Créer une première ligne de tuiles en fonction d'une taille donnée
// 2/ Après chaque ligne de tuiles, il faut sauter une ligne (\n)

for (let i = 0; i < SIZE; i++) {
  // Création d'une ligne
  for (let i = 0; i < SIZE; i++) {
    map += TILE;
  }
  // Ajout d'un saut de ligne
  map += "\n";
}

console.log(map);
