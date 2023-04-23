import { IAuthenticatedUser } from '../../app/schemas';


export type IUser = Pick<IAuthenticatedUser, 'email' | 'name'>

export interface IForAuthenticating {
    login: (email: string, password: string) => Promise<IAuthenticatedUser>;
    register(user: IUser, password: string): Promise<IAuthenticatedUser>
}