import { type Express, type Request, type Response } from 'express';
module.exports = (app: Express) => {
  // Create a 'GET' request.
  app.get('/msg', (req: Request, res: Response) => {
    setTimeout(() => {
      res.type('application/json');
      res.send({
        msg: 'success',
        data: {
          title: 'Hello,Programmer!!',
          decription: 'A example for testing react-router'
        }
      });
    }, 3000);
    //   res.status(401).send("Don't have access.");
  });

  app.get('/query', (req, res) => {
    res.status(401).send("Don't have access.");
  });
};
