export interface User {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

const userContext: User = {
    username: '',
    password: '',
    isAuthenticated: false,
}

export const authenticate = (username: string, password: string): User => {
    userContext.username = username;
    userContext.password = password;
    userContext.isAuthenticated = Boolean(username) && Boolean(password) && username.includes(password);
    return getUser();
}

export const getUser = (): User => ({ ...userContext });

export const isAuthenticated = (): boolean => userContext.isAuthenticated;

export const logout = (): void => {
    userContext.isAuthenticated = false;
}
