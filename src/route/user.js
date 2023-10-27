import { findAllUsers, findUserById } from '../service/user.js';
const userRouter = (app) => {
  app.get('/users', async (req, res) => {
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

export default userRouter;
