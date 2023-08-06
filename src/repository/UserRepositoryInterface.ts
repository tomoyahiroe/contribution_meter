import { User } from '../gql/type.js';
export interface UserRepositoryInterface {
	getUser: (username: string, QUERY: string) => Promise<User>;
}
