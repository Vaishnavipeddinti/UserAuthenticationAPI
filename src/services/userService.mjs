import { saveUser, findUser } from '../models/userModel.mjs';
import bcrypt from 'bcryptjs';

export const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await saveUser({ username, password: hashedPassword });
};

export const loginUser = async (username, password) => {
    const user = await findUser(username);
    if (user && await bcrypt.compare(password, user.password)) {
        return { status: 200, body: JSON.stringify({ message: 'Login successful' }) };
    }
    return { status: 401, body: JSON.stringify({ message: 'Invalid credentials' }) };
};
