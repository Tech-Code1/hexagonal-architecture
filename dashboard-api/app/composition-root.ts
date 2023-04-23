import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens';
import { DashboardApi } from './dashboard-api';
import { AuthenticatorProxyAdapter } from '../adapters/drivers/authenticator-proxy-adapter';

const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQueriesStub = new RepoQuerierStub;
    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQueriesStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock)

    return {
        authenticatorProxyAdapter,
    }
}

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
    name: 'John',
    email: 'john@example.com',
}
authenticatorProxyAdapter.login('jon@gmail.com', '123456');
authenticatorProxyAdapter.register(registerMock, '123456')