function add(nb1, nb2) {
  console.log("fonction d'addition");
  console.log(nb1 + nb2 + nb1);
  console.log("fin");
  return nb1 + nb2 + nb1;
}

const result = add(10, 5);
add(3, 9);
add(-6, 8.5);
console.log("retour du 1er appel => " + result);
