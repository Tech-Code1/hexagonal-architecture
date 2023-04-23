export interface IAuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
}