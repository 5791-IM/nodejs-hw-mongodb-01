import { registerUser } from '../services/auth';

export const registerController = async (req, res) => {
  const user = await registerUser(req.body);

  res.json({
    status: 201,
    message: 'User registered successfully',
    data: user,
  });
};
