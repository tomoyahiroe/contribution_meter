import { UserRepositoryInterface } from '../repository/UserRepositoryInterface.js';
export interface ContributionServiceInterface {
	getTotalContribution: (username: string) => Promise<void>;
}
