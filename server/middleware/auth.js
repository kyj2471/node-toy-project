import jwt from 'jsonwebtoken';
import * as model from '../data/auth.js';

const AUTH_ERROR = { message: 'auth error' };

const SECRET_KEY = '!76Twm*sY@U40RfJa';

export const isAuth = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    const user = await model.findById(decoded.id);
    if (!user) {
      return res.status(401).json(AUTH_ERROR);
    }
    req.userId = user.id;
    next();
  });
};
