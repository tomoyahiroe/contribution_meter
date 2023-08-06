import { User } from '../gql/type.js';
import { TotalContributionServiceInterface } from './TotalContributionServiceInterface.js';
import { UserRepositoryInterface } from '../repository/UserRepositoryInterface.js';
export class TotalContributionService
  implements TotalContributionServiceInterface
{
  private userRepository: UserRepositoryInterface;
  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }
  getTotalContribution = async (): Promise<void> => {
    this.userRepository.getUser().then((user: User) => {
      console.log(user);
    });
  };
}
