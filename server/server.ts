import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const port = process.env.EXPRESS_PORT || 3001;

    server.get('/test1', (req, res) => { //the handle is for handling requests. This initially was at a catchall '*' endpoint but that didn't work. This might need to be at the root endpoint of our requests for best function. I don't know.
      return handle(req, res);
    });

    server.get('/test2', (req, res) => {
      return res.send('test');
    });
    //routes and middleware

    server
      .listen(port, () => {
        console.log(`Server is running at port ${port}`);
      })
      .on('error', (err: any) => {
        console.log(err);
      });
  })
  .catch((err: any) => {
    console.error(err.stack);
    process.exit(1);
  });
