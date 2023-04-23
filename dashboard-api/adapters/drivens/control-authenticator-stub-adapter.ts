import { IAuthDetails, IPermissions } from '../../app/schemas';
import { IForControlAuthenticating } from '../../ports/drivens';

const authDetailsMock: IAuthDetails = {
    token: '1234567890',
    refreshToken: '0987654321',
}

const permissionMock: IPermissions = {
    admin: true,
    user: true,
}

export class ControlAuthenticatorStub implements IForControlAuthenticating {

    getAuthDetails(_email: string, _password: string): Promise<IAuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email: string, _password: string): Promise<IPermissions> {
        return Promise.resolve(permissionMock);
    }

}