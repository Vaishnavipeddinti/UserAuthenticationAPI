import { createAccount, login } from '../../src/controllers/userController.mjs';

export const handler = async (event) => {
    const route = event.resource;
    switch (route) {
        case '/create-account':
            return await createAccount(event);
        case '/login':
            return await login(event);
        default:
            return { statusCode: 404, body: 'Route not found' };
    }
};
