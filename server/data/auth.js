let users = [];

export const findByUsername = async (username) => {
  return users.find((user) => user.username === username);
};

export const createUser = async (user) => {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
};

export const findById = async (id) => {
  return users.find((user) => user.id === id);
};
