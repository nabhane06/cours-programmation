const users = [
  {
    id: 1,
    name: "Coco",
    email: "coco@mail.fr",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Jaco",
    email: "jaco@mail.fr",
    role: "EDITOR",
  },
  {
    id: 3,
    name: "Pedro",
    email: "pedro@mail.fr",
    role: "SUPER_ADMIN",
  },
  {
    id: 4,
    name: "Franco",
    email: "franco@mail.fr",
    role: "ADMIN",
  },
  {
    id: 5,
    name: "Fernando",
    email: "fernando@mail.fr",
    role: "SUPER_ADMIN",
  },
];

// CONSIGNE :
// extraire tous les supers admins --> [].filter()
//

const usersFiltered = users.filter(getRole);

for (let user of usersFiltered) {
  display(user.name, user.email);
}

function getRole(user) {
  return user.role === "SUPER_ADMIN";
}

function display(userName, userEmail) {
  console.log("name:", userName, "(" + userEmail + ")");
}
