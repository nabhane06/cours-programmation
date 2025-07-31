// Dev 1 (celui qui crée l'objet car...)
const car = {
  name: "porshe",
  model: "macane",
  year: "2025",
  finition: "sports",
  started: false,
  start: function () {
    if (!this.started) {
      this.started = true;
      console.log("la voiture démarre et se met à rouler");
    } else {
      console.log("Attention: la voiture est déjà en train de rouler");
    }
  },
  accelerate: () => "la voiture accelere",
  stop: function () {
    if (this.started) {
      this.started = false;
      console.log("la voiture s'arrete");
    } else {
      console.log("Attention: la voiture est deja arretée");
    }
  },
};

// Dev 2 (celui qui utilise l'objet car)
car.start();
car.accelerate();
car.start();
car.stop();
