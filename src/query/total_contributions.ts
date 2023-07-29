export const QUERY = `
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
