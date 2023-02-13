/**
 * controller(business logic)
 */
import * as model from '../data/messages.js';

// get all message
export const getMessages = async (req, res) => {
  const username = req.query.username;
  const result = (await username)
    ? model.getByUserName(username)
    : model.getAll();
  res.status(200).json(result);
};

// get message by id
export const getMessage = async (req, res, next) => {
  const id = req.params.id;
  const result = await model.getById(id);
  res.status(200).json(result);
};

// create new message
export const postMsg = async (req, res, next) => {
  const { text, name, username } = req.body;
  const newMsg = await model.create(text, name, username);
  res.status(201).json(newMsg);
};

// update message
export const updateMsg = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const result = model.update(id, text);
  if (typeof id !== number) {
    res.status(400).json('you wrong');
  }
  if (result) {
    console.log('1');
    res.status(200).json(result);
  } else {
    console.log('2');
    res.status(404).json('there was an error');
  }
};

// delete message
export const removeMsg = (req, res, next) => {
  const id = req.params.id;
  const result = model.remove(id);
  res.status(200).json(result);
};
