import { getUsers } from '../database/database.js';
import MongoDb from 'mongodb';

export const findByUsername = async (username) => {
  return getUsers()
    .findOne({ username: username })
    .then((data) => {
      mapOptionalUser(data);
    });
};

export const createUser = async (user) => {
  return getUsers()
    .insertOne(user)
    .then((data) => {
      console.log(data);
      return data.insertedId.toString();
    });
};

export const findById = async (id) => {
  return getUsers()
    .findOne({ _id: new MongoDb.ObjectId(id) })
    .then((data) => {
      mapOptionalUser(data);
    });
};

const mapOptionalUser = (user) => {
  return user ? { ...user, id: user._id.toString() } : user;
};
