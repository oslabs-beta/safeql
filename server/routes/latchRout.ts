import express, {  Express,  Request,  Response,  ErrorRequestHandler } from 'express';
const authSet = require('../controllers/latchQL')

const latchRouter = express.Router();

latchRouter.post("/", authSet, (req, res) => {
  return res.status(200).send('yes!');
});

module.exports = latchRouter;