import { graphql } from '@octokit/graphql';
import * as readline from 'readline';
import { QUERY } from './query/total_contributions.js';
import { User } from './gql/type.js';
const token = process.env.GIT_EXTENSION_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${token}`,
  },
});

async function getInfo(username: string) {
  try {
    const user = await graphqlWithAuth<{ user: User }>(QUERY, {
      login: username,
    });
    const totalContributions: any =
      user.user.contributionsCollection.contributionCalendar.totalContributions;
    process.stdout.write(`total contributions: ${totalContributions}\n`);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else if (typeof err === 'string') {
      console.log(err);
    } else {
      console.log('unexpected error');
    }
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
