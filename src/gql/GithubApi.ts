import { graphql } from '@octokit/graphql';

export class GithubApi {
  private token = process.env.GIT_EXTENSION_TOKEN;
  private graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${this.token}`,
    },
  });
  public getUser = async <User>(
    username: string,
    QUERY: string
  ): Promise<User> => {
    const user = await this.graphqlWithAuth<{ user: User }>(QUERY, {
      login: username,
    });
    return user.user;
  };
}
