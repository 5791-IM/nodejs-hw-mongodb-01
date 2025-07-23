import express from 'express';

import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerSchema } from '../validation/auth.js';
import { registerController } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

export default authRouter;
