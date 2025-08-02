import { Router } from 'express';
import {
  loginController,
  logoutController,
  refreshSessionController,
  registerController,
  sendResetEmailController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginSchema,
  registerSchema,
  sendResetEmailSchema,
} from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

authRouter.post(
  '/login',
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

authRouter.post('/logout', ctrlWrapper(logoutController));
authRouter.post('/refresh', ctrlWrapper(refreshSessionController));

authRouter.post(
  '/send-reset-email',
  validateBody(sendResetEmailSchema),
  ctrlWrapper(sendResetEmailController),
);

export default authRouter;
