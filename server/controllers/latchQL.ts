import {  Express,  Request,  Response,  ErrorRequestHandler } from 'express';

function authSet (req:Request, res:Response, next) {
  res.locals.authLevel = "Admin";
  res.locals.userName = "Bob";
  next ();
}

module.exports = {
  authSet,
}