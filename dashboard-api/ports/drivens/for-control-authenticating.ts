import { IAuthDetails, IPermissions } from "../../app/schemas";


export interface IForControlAuthenticating {
    getAuthDetails(email: string, password: string): Promise<IAuthDetails>;
    getPermissions(email: string, password: string): Promise<IPermissions>;
}