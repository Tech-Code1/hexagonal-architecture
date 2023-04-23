import { IUser as IRepoUser } from '../../../repository/app/schemas';
import { IForRepoQuerying } from '../../ports/drivens';

const userMock: IRepoUser = {
    id: '12345',
    name: 'John',
    email: 'john@example.com'
}

export class RepoQuerierStub implements IForRepoQuerying {
    getUser(email: string): Promise<IRepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(user: IRepoUser, password: string): Promise<IRepoUser> {
        return Promise.resolve(userMock);
    }

}