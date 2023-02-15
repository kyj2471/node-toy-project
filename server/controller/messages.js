/**
 * controller(business logic)
 */
import * as model from '../data/messages.js';

// get all message
export const getMessages = async (req, res) => {
  console.log(req.headers);
  const username = req.query.username;
  const result = username
    ? await model.getByUserName(username)
    : await model.getAll();
  console.log(result);
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
  const { text } = req.body;
  const newMsg = await model.create(text, req.userId);
  res.status(201).json(newMsg);
};

// update message
export const updateMsg = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const result = model.update(id, text);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json('there was an error');
  }
};

// delete message
export const removeMsg = (req, res, next) => {
  const id = req.params.id;
  const result = model.remove(id);
  res.status(200).json(result);
};
