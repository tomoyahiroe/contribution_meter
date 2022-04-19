import {graphql} from '@octokit/graphql';
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

async function getInfo() {
	try {
		const {user} = await graphqlWithAuth(QUERY, {login: 'tomoyahiroe'});
		console.log(user);
	} catch(err) {
		console.error(err.message);
	}
}

getInfo();