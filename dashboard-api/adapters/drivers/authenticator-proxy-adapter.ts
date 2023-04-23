import { IForAuthenticating, IUser } from "../../ports/drivers";
import { DashboardApi } from '../../app/dashboard-api';
import { IAuthenticatedUser } from "../../app/schemas";

export class AuthenticatorProxyAdapter implements IForAuthenticating {

    constructor(private readonly dashboardApi: DashboardApi) { }

    async login(email: string, password: string): Promise<IAuthenticatedUser> {
        return this.dashboardApi.login(email, password);
    };

    async register(user: IUser, password: string): Promise<IAuthenticatedUser> {
        return this.dashboardApi.register(user, password);
    }

}