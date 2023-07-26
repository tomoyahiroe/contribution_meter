import { graphql } from '@octokit/graphql';
import * as readline from 'readline';
const token = process.env.GIT_EXTENSION_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${token}`,
  },
});

const QUERY = `
	query getUser($login: String!) {
		user(login: $login) {
			login
			name
			url
			contributionsCollection {
				contributionCalendar {
					totalContributions
				}
			}
		}
	}
`;

async function getInfo(username: any) {
  try {
    const { user }: any = await graphqlWithAuth(QUERY, { login: username });
    console.log(user);
  } catch (err: any) {
    console.error(err.message);
  }
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question('INPUT TARGET USERNAME\n', (inS) => {
  reader.close();
  getInfo(inS);
});
