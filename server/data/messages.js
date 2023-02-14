import * as model from './auth.js';

/**
 * model(data layer)
 */
let list = [
  {
    id: '1',
    text: '힘을내 영재야',
    createAt: new Date().toString(),
    userId: '1'
  },
  {
    id: '2',
    text: '난 지쳤어',
    createAt: new Date().toString(),
    userId: '2'
  }
];

// get all message
export const getAll = () => {
  return Promise.all(
    list.map(async (msg) => {
      const { username, name } = await model.findById(msg.userId);
      return { ...list, username, name };
    })
  );
};

// get message by username
export const getByUserName = (username) => {
  return getAll().then((messages) =>
    messages.filter((data) => data.username === username)
  );
};

// get message by user id
export const getById = async (id) => {
  const found = list.find((msg) => msg.id === id);
  if (!found) {
    return null;
  }
  const { username, name } = await model.findById(found.userId);
  return { ...found, username, name };
};

// create new message
export const create = (text, userId) => {
  console.log(userId);
  const newData = {
    id: new Date().toString(),
    text,
    createAt: new Date(),
    userId
  };
  list = [newData, ...list];
  return getById(newData.id);
};

// update message
export const update = (id, text) => {
  const findObj = list.find((el) => el.id === id);
  if (findObj) {
    findObj.text = text;
  }
  return getById(findObj.id);
};

// delete message
export const remove = (id) => {
  list = list.filter((data) => data.id !== id);
  return list;
};
