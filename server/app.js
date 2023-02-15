import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import { config } from './config.js';
import messages from './router/messages.js';
import auth from './router/auth.js';
import { connectDb } from './database/database.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/messages', messages);
app.use('/auth', auth);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connectDb()
  .then(() => {
    app.listen(config.host.port);
  })
  .catch(console.error);
