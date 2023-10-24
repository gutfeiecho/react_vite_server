// Import express.
import { Express } from 'express';
const express = require('express');
const cors = require('cors');
const app: Express = express();
const userRouter = require('./route/user');
app.use(cors());

const PORT = 8989;

userRouter(app);

// Port is 8989.
app.listen(PORT, function () {
  console.log(`App is running at http://localhost:${PORT}.`);
});
