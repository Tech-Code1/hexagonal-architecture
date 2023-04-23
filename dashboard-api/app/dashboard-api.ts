import { IForControlAuthenticating } from "../ports/drivens";
import { IForAuthenticating, IUser } from "../ports/drivers";
import { IForRepoQuerying } from '../ports/drivens/for-repo-querying';
import { IAuthenticatedUser } from "./schemas";

export class DashboardApi implements IForAuthenticating {

    constructor(
        private readonly controlAuthenticator: IForControlAuthenticating,
        private readonly repoQuerier: IForRepoQuerying
    ) { }


    async login(email: string, password: string): Promise<IAuthenticatedUser> {
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            email,
            password
        );
        const permissions = await this.controlAuthenticator.getPermissions(
            email,
            password
        );

        const user = await this.repoQuerier.getUser(email);


        const result = {
            ...user,
            ...authDetails,
            ...permissions
        }
        console.log('LOGIN', result);

        return result;
    };

    async register(user: IUser, password: string): Promise<IAuthenticatedUser> {
        const newUser = await this.repoQuerier.createUser(user, password);
        const authDetails = await this.controlAuthenticator.getAuthDetails(
            user.email,
            password
        );

        const permissions = await this.controlAuthenticator.getPermissions(
            user.email,
            password
        );

        const result = {
            ...newUser,
            ...authDetails,
            ...permissions
        }
        console.log('REGISTER', result);

        return result;
    };

}