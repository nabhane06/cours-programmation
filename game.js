const readline = require("readline");
const grid = require("./grid");
const player = require("./player");
const TILE = require("./tile");

let map;
startGame();

function startGame() {
  map = grid.createGrid();
  grid.placePlayer();
  displayGame();
  listenToInput();
}

function displayGame() {
  grid.displayGrid();
  console.log("");
  console.log("----------------------");
  console.log("PV: " + player.hp + " - Score: " + player.score);
  console.log("----------------------");
  console.log("(W A S D pour se deplacer)");
}

function movePlayer(direction) {
  map[player.y][player.x] = TILE.EMPTY;

  if (direction === "w" && player.y > 0) {
    player.y--;
  }
  if (direction === "s" && player.y < map.length - 1) {
    player.y++;
  }

  if (direction === "a" && player.x > 0) {
    player.x--;
  }
  if (direction === "d" && player.x < map[0].length - 1) {
    player.x++;
  }

  const tile = map[player.y][player.x];
  applyTileEffect(tile);

  grid.placePlayer();
}

function applyTileEffect(tile) {
  switch (tile) {
    case TILE.ENEMY:
    case TILE.TRAP:
      player.hp--;
      break;
    case TILE.TREASURE:
      player.score++;
  }
}

function listenToInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.prompt();

  rl.on("line", function (input) {
    const key = input.trim().toLowerCase();

    if ("wasd".includes(key)) {
      movePlayer(key);
      displayGame();
      if (player.hp <= 0) {
        console.log("fin du jeux tu es mort");
        rl.close();
        process.exit();
      }
    } else {
      console.log("Attention : il faut utiliser W A S D pour te déplacer !");
    }

    rl.prompt();
  });
}
