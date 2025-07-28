import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/students.js';
import { updateContactSchema } from '../validation/students.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:Id', isValidId, ctrlWrapper(getContactByIdController));

contactsRouter.post(
  '/',
  authenticate,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.delete('/:Id', isValidId, ctrlWrapper(deleteContactController));

contactsRouter.patch(
  '/:Id',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

contactsRouter.use(authenticate);

export default contactsRouter;
