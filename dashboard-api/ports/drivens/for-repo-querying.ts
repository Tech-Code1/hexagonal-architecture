import { IUser as IRepoUser } from '../../../repository/app/schemas';
import { IUser } from '../drivers';


export interface IForRepoQuerying {
    getUser(email: string): Promise<IRepoUser>;
    createUser(user: IUser, password: string): Promise<IRepoUser>;
}