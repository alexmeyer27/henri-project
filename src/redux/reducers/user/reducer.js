import { createReducer } from '../reducerCreator';

export const GET_USERS = 'GET_USERS';
export const GET_FACES = 'GET_FACES';

const defaultState = {
	users: [],
	getUsersFailed: false,
	faces: [],
	getFacesFailed: false
}


const usersReducer = createReducer(defaultState, {
	[GET_USERS](state, action) {
		return {
			...state,
			users: action.users,
			getUsersFailed: action.getUsersFailed
		}
	},
	[GET_FACES](state, action) {
		let users = state.users;
		let usersWithFaces = [];

		users.forEach(function(user, index) {
			user.avatar = action.faces[index].photo
			usersWithFaces.push(user);
		});

		return {
			...state,
			users: usersWithFaces,
			faces: action.faces,
			getFacesFailed: action.getFacesFailed
		}
	},
});

export const namespace = 'users';
export const local = state => state[namespace];
export default usersReducer;