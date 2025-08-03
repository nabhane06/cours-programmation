const beverageMachine = {
  name: "cocodrink",
  model: "coca",
  utilisation: "give a drink",
  drinks: ["cocaCola", "fanta", "orangina", "bouteille d'eau"],

  started: false,
  start: function () {
    if (!this.started) {
      this.started = true;
      console.log("mettre 1$");
    } else {
      console.log("appuyer sur n'importe quel boutton");
    }
  },
  chooseDrink: function (code) {
    if (code < this.drinks.length && code >= 0) {
      console.log("voici votre boisson : " + this.drinks[code]);
    } else {
      console.log(
        "rentrez un code compris entre 0 et " + (+this.drinks.length - 1)
      );
    }
  },
  inside: function () {
    console.log("la machine prend la boisson");
  },
  stop: function () {
    if (this.started) {
      this.started = false;
      console.log("la boisson descend");
    } else {
      console.log("la boisson est tomber");
    }
  },
};

beverageMachine.start();
beverageMachine.inside();
beverageMachine.chooseDrink(-9);
beverageMachine.stop();
