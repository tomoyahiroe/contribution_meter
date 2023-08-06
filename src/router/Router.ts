import { UserController } from '../controller/UserController.js';
export class Router {
	public static func = (args: string[]) => {
		const username = args[2];
		if (username) {
			UserController.index(username);
		} else {
			console.log('Please input username');
		}
	};
}
