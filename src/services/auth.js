
import bcrypt from 'bcrypt';

import createHttpError from 'http-errors';
import { User } from '../db/models/User';

export const registerUser = async (payload) => {
    const user = await User.findOne({ email: payload.email });

    if (user !== null) {
        throw new createHttpError(409, 'Email in use');
    }

    payload.password = await bcrypt.hash(payload.password, 10);

    return User.create(payload);
};
