import { UserRepositoryInterface } from './UserRepositoryInterface.js';
import { GithubApi } from '../gql/GithubApi.js';
import { User } from '../gql/type.js';

export class UserRepository implements UserRepositoryInterface {
	protected githubApi: GithubApi;
	constructor() {
		this.githubApi = new GithubApi();
	}

	public getUser = async (username: string, QUERY: string) => {
		return await this.githubApi.getUser<User>(username, QUERY);
	};
}
