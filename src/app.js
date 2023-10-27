// Import express.
import express from 'express';
import cors from 'cors';
import userRouter from './route/user.js';
import { encryptPassword, decryptPassword } from './utils/index.js';
const app = express();
app.use(cors());

const PORT = 8989;

userRouter(app);

const message = 'Hello, Lucas.';

const encryptedData = encryptPassword(message);
console.log('🚀 ~ file: app.ts:18 ~ encryptedData:', encryptedData);

const decryptedData = decryptPassword(encryptedData);
console.log('🚀 ~ file: app.ts:21 ~ decryptedData:', decryptedData);

app.listen(PORT, function () {
  console.log(`App is running at http://localhost:${PORT}.`);
});
