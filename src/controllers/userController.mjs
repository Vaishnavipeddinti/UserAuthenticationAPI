import { createUser, loginUser } from '../services/userService.mjs';

export const createAccount = async (event) => {
    const { username, password } = JSON.parse(event.body);
    return await createUser(username, password);
};

export const login = async (event) => {
    const { username, password } = JSON.parse(event.body);
    return await loginUser(username, password);
};
