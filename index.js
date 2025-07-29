const numbers = [78, 5, -2];

const result = numbers.map(display);
console.log("Result -->", result); // Result --> [156, 10, -4]

// Déclarations de fonctions
function display(nb, index) {
  console.log("Valeur:", nb);
  console.log("Position:", index);

  return nb * 2;
}
