import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth';
import { registerUserController } from '../controllers/auth';
import validateBody from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default router;
