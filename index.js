function calculatrice(nb1, nb2, op) {
  switch (op) {
    case "+":
      console.log("addition");
      return nb1 + nb2;

    case "-":
      console.log("soustraction");
      return nb1 - nb2;

    case "/":
      console.log("division");
      return nb1 / nb2;

    case "*":
      console.log("multiplication");
      return nb1 * nb2;

    default:
      console.log("+ - / *");
  }
}

const result = calculatrice(45, 4, "-"); // recuperer une valeur  dans une variable
console.log(result);

calculatrice(5, 4, "/");
