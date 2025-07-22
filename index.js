const friends = ["coco", "jaco"];

for (let i = 0; i < friends.length; i = i + 1) {
  console.log(friends[i]);
}

for (let friend of friends) {
  console.log(friend);
}

for (let index in friends) {
  console.log(index);
}

console.log("fin");
