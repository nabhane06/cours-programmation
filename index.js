const TILE = ".";

const grid = [
  [TILE, TILE, TILE], // 0 length --> 3
  [TILE, TILE, TILE], // 1 length --> 3
  [TILE, TILE, TILE], // 2 length --> 3
]; // length --> 3

let str = "";

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    str += TILE;
  }
  str += "\n";
}

console.log(str);
