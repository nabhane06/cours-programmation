const numbers = [78, 5, -2, 1000, 76, 2, 1, -76, 8887776, 56];

const result = numbers.filter(display);
console.log("Result -->", result); // Result --> [78, 1000, 76, 88877776, 56]

// Déclarations de fonctions
function display(nb, index) {
  console.log("Valeur:", nb);
  console.log("Position:", index);

  return nb >= 50;
}
