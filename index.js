const numbers = [78, 5, -2, 88, 8888, 109, -67.87, 777];

numbers.forEach(display);
// numbers.forEach(console.log);

// Déclarations de fonctions
function display(nb, index, copyArray) {
  console.log("Valeur:", nb);
  console.log("Position:", index);
  console.log("Copie du tab:", copyArray);
  console.log();
}
