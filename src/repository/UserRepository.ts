import { UserRepositoryInterface } from './UserRepositoryInterface.js';
import { GithubApi } from '../gql/GithubApi.js';
import { User } from '../gql/type.js';

export class UserRepository implements UserRepositoryInterface {
  protected username: string;
  protected QUERY: string;
  protected githubApi: GithubApi;
  constructor(username: string, QUERY: string, githubApi: GithubApi) {
    this.username = username;
    this.QUERY = QUERY;
    this.githubApi = githubApi;
  }

  public getUser = async () => {
    return await this.githubApi.getUser<User>(this.username, this.QUERY);
  };
}
