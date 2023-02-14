import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';
import * as authController from '../controller/auth.js';

const router = express.Router();

const validateLogin = [
  body('username').trim().notEmpty().withMessage('username need'),
  body('password').trim().isLength({ min: 1 }).withMessage('need more than 5'),
  validate
];

const validateSignup = [
  ...validateLogin,
  body('name').notEmpty().withMessage('name is miss'),
  body('email').isEmail().normalizeEmail().withMessage('invalid'),
  validate
];

// GET /auth/me
router.get('/me', isAuth, authController.me);
// POST /auth/signup
router.post('/signup', validateSignup, authController.signup);
// POST /auth/login
router.post('/login', validateLogin, authController.login);

export default router;
