import { User } from '../gql/type.js';
export interface UserRepositoryInterface {
  getUser: () => Promise<User>;
}
