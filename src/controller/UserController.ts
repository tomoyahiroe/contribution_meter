import { ContributionService } from '../service/ContributionService.js';
import { ContributionServiceInterface } from '../service/ContributionServiceInterface.js';
export class UserController {
	private username: string;
	constructor(username: string) {
		this.username = username;
	}

	public static index = async (
		username: string,
		service: ContributionServiceInterface = new ContributionService()
	) => {
		await service.getTotalContribution(username);
	};
}
