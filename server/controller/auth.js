import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'express-async-errors';
import { config } from '../config.js';
import * as model from '../data/auth.js';

export const signup = async (req, res, next) => {
  const { username, password, name, email } = req.body;
  const found = await model.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} exist` });
  }
  console.log(typeof config.bcrypt.saltRound);
  const hashed = await bcrypt.hash(password, parseInt(config.bcrypt.saltRound));
  const userId = await model.createUser({
    username,
    password: hashed,
    name,
    email
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await model.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'invalid user or password' });
  }
  const isValidPasswrod = await bcrypt.compare(password, user.password);
  if (!isValidPasswrod) {
    return res.status(401).json({ message: 'invalid user or password2' });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
};

export const me = async (req, res, next) => {
  const user = await model.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  res.status(200).json({ token: req.token, username: user.username });
};

const createJwtToken = (id) => {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expireDate
  });
};
