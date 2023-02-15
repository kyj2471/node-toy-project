import * as model from './auth.js';
import { getMessages } from '../database/database.js';

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
  return getMessages()
    .find()
    .sort({ createdAt: -1 })
    .toArray()
    .then((data) => {
      console.log(data);
      return data;
    });
  return Promise.all(
    list.map(async (msg) => {
      const { username, name } = await model.findById(msg.userId);
      console.log(username);
      console.log(name);
      return { ...msg, username, name };
    })
  );
};

// get message by username
export const getByUserName = (username) => {
  console.log('이건아닐거고');
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
export const create = async (text, userId) => {
  const { name, username } = await model.findById(userId);
  const newData = {
    text,
    createAt: new Date(),
    name,
    username,
    userId
  };
  return getMessages()
    .insertOne()
    .then((data) => {
      console.log(data);
      return data;
    });
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
