const numbers = [78, 5, -2, 1000, 76, 2, 1, -76, 8887776, 56];

const result = numbers.findIndex(display);
console.log("Result -->", result); // Result --> 2

// Déclarations de fonctions
function display(nb, index) {
  console.log("Valeur:", nb);
  console.log("Position:", index);

  return nb <= 4;
}
