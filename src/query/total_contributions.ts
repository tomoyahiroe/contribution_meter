export const QUERY = `
	query getUser($login: String!) {
		user(login: $login) {
			contributionsCollection {
				contributionCalendar {
					totalContributions
				}
			}
		}
	}
`;
