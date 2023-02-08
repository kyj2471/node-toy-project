import express from 'express';
import 'express-async-errors';

const messages = [
  {
    id: '1',
    text: '힘을내 영재야',
    createAt: Date.now().toString(),
    name: 'K',
    username: 'KK',
    url: 'github.com'
  }
];

const router = express.Router();

router.get('/', (req, res, next) => {
  const dummy = 'tony';
  res.status(200).json(dummy);
});

// GET /messages
// GET /messages?username=???
// GET /messages/:id
// POST /messages
// PUT /messages/:id
// DELETE /messages

export default router;
