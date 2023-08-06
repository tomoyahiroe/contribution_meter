import { User } from '../gql/type.js';
import { ContributionServiceInterface } from './ContributionServiceInterface.js';
import { UserRepositoryInterface } from '../repository/UserRepositoryInterface.js';
import { UserRepository } from '../repository/UserRepository.js';
import * as TotalContributionQuery from '../query/total_contributions.js';

export class ContributionService implements ContributionServiceInterface {
	private userRepository: UserRepositoryInterface;
	constructor() {
		this.userRepository = new UserRepository();
	}

	public getTotalContribution = async (username: string): Promise<void> => {
		this.userRepository
			.getUser(username, TotalContributionQuery.QUERY)
			.then((user: User) => {
				const totalContributions =
					user.contributionsCollection.contributionCalendar.totalContributions;
				process.stdout.write(`total contributions: ${totalContributions}\n`);
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.log(err.message);
				} else if (typeof err === 'string') {
					console.log(err);
				} else {
					console.log('unexpected error');
				}
			});
	};
}
