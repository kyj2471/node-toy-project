import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';
import * as msgController from '../controller/messages.js';

const router = express.Router();

const msgValidate = [
  body('text')
    .trim()
    .isLength({ min: 1 })
    .withMessage('something wrong! need more than 1 text'),
  validate
];

// GET /messages
// GET /messages?username=???
router.get('/', isAuth, msgController.getMessages);

// GET /messages/:id
router.get('/:id', isAuth, msgController.getMessage);

// POST /messages
router.post('/', isAuth, msgValidate, msgController.postMsg);

// PUT /messages/:id
router.put('/:id', isAuth, msgValidate, msgController.updateMsg);

// DELETE /messages
router.delete('/:id', isAuth, msgController.removeMsg);

export default router;
