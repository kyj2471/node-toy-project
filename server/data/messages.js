/**
 * model(data layer)
 */
let list = [
  {
    id: '1',
    text: '힘을내 영재야',
    createAt: Date.now().toString(),
    name: 'K',
    username: 'KK',
    url: 'github.com'
  },
  {
    id: '2',
    text: '난 지쳤어',
    createAt: Date.now().toString(),
    name: 'yj',
    username: 'yj'
  }
];

// get all message
export const getAll = () => {
  return list;
};

// get message by username
export const getByUserName = (username) => {
  return list.filter((data) => data.username === username);
};

// get message by user id
export const getById = (id) => {
  return list.filter((data) => data.id === id);
};

// create new message
export const create = (text, name, username) => {
  const newData = {
    id: Date.now().toString(),
    text,
    createAt: new Date(),
    name,
    username
  };
  list = [newData, ...list];
  return newData;
};

// update message
export const update = (id, text) => {
  const findObj = list.find((el) => el.id === id);
  if (findObj) {
    findObj.text = text;
  }
  return findObj;
};

// delete message
export const remove = (id) => {
  list = list.filter((data) => data.id !== id);
  return list;
};
