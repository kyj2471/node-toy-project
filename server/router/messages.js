import express from 'express';
import 'express-async-errors';
import * as msgController from '../controller/messages.js';

const router = express.Router();

// GET /messages
// GET /messages?username=???
router.get('/', msgController.getMessages);

// GET /messages/:id
router.get('/:id', msgController.getMessage);

// POST /messages
router.post('/', msgController.postMsg);

// PUT /messages/:id
router.put('/:id', msgController.updateMsg);

// DELETE /messages
router.delete('/:id', msgController.removeMsg);

export default router;
