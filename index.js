import {graphql} from '@octokit/graphql';
const token = process.env.GIT_EXTENSION_TOKEN;

const graphqlWithAuth = graphql.defaults({
 headers: {
  authorization: `token ${token}`,
 },
});
import * as readline from 'readline';
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

async function getInfo(username) {
	try {
		const {user} = await graphqlWithAuth(QUERY, {login: username});
		console.log(user);
	} catch(err) {
		console.error(err.message);
	}
}

var reader=readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
reader.question("INPUT TARGET USERNAME\n",
inS=>{
	reader.close();
	getInfo(inS)
})