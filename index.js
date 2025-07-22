function calculatrice(nb1, nb2, op) {
  switch (op) {
    case "+":
      console.log("addition");
      console.log(nb1 + nb2);
      break;
    case "-":
      console.log("soustraction");
      console.log(nb1 - nb2);
      break;
    case "/":
      console.log("division");
      console.log(nb1 / nb2);
      break;
    case "*":
      console.log("multiplication");
      console.log(nb1 * nb2);
      break;

    default:
      console.log("+ - / *");
  }
}

calculatrice(45, 4, "*");
calculatrice(5, 4, "/");
