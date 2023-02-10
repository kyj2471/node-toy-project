import express from 'express';
import 'express-async-errors';

const list = [
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

const router = express.Router();

// GET /messages
// GET /messages?username=???
router.get('/', (req, res, next) => {
  let result;
  if (req.query.username) {
    result = list.filter((data) => data.username === req.query.username);
  } else {
    result = list;
  }
  res.status(200).json(result);
});

// GET /messages/:id
router.get('/:id', (req, res, next) => {
  const result = list.filter((data) => data.id === req.params.id);
  res.status(200).json(result);
});

// POST /messages
router.post('/', (req, res, next) => {
  list.push(req.body);
  res.status(200).json('success');
});

// PUT /messages/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const findObj = list.find((el) => el.id === id);
  if (findObj) {
    findObj.text = req.body.text;
    const result = findObj;
    res.status(200).json(result);
  } else {
    res.status(400).json('there was an error');
  }
});

// DELETE /messages
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  const result = list.filter((data) => data.id !== id);
  res.status(200).json(result);
});

export default router;
