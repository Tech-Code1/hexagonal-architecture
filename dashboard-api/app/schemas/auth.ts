export interface IAuthDetails {
    token: string;
    refreshToken: string;
}

export interface IPermissions {
    admin: boolean;
    user: boolean;
}