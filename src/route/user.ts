import { type Express, type Request, type Response } from 'express';
const { findAllUsers, findUserById } = require('../service/user');
module.exports = (app: Express) => {
  app.get('/users', async (req: Request, res: Response) => {
    const result = await findAllUsers();
    res.send({
      msg: 'success',
      data: result
    });
  });

  app.get('/users/:id', async (req, res) => {
    console.log('🚀 ~ file: user.js:12 ~ app.get ~ req:', req.params);
    const result = await findUserById(req.params.id);
    res.send({
      msg: 'success',
      data: result
    });
  });
};
