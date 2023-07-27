import { graphql } from '@octokit/graphql';
import * as readline from 'readline';
import { QUERY } from './query/total_contributions.js';
const token = process.env.GIT_EXTENSION_TOKEN;

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${token}`,
  },
});

async function getInfo(username: any) {
  try {
    const { user }: any = await graphqlWithAuth(QUERY, { login: username });
    console.log("total contributions: " + user.contributionsCollection.contributionCalendar.totalContributions);
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
