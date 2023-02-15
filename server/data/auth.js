let users = [
  {
    id: '1',
    username: 'tony',
    password: 'tony0405!',
    name: 'k',
    email: 'tony@hellomarket.com'
  },
  {
    id: '2',
    username: 'chloe',
    password: 'chloetony',
    name: 'kyh',
    email: 'chloe@hellomarket.com'
  }
];

export const findByUsername = async (username) => {
  return users.find((user) => user.username === username);
};

export const createUser = async (user) => {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  console.log(users);

  return created.id;
};

export const findById = async (id) => {
  return users.find((user) => user.id === id);
};
