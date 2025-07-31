const car = {
  name: "porshe",
  model: "macane",
  year: "2025",
  finition: "sports",
  started: false,
  start: () => "la voiture est en train de rouler",
  accelerate: () => "la voiture accelere",
  stop: () => "la voiture s'arrete",
};

console.log(car.start());
car.started = true;

if (car.started) {
  console.log(car.accelerate());
  console.log(car.stop());
  car.started = false;
}
