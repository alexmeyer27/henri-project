import { GET_USERS, GET_FACES } from './reducer';

export function getusers(users, getUsersFailed) {
	return {
			type: GET_USERS,
			users: users,
			getUsersFailed: getUsersFailed
		}
	
}

export function getfaces(faces, getFacesFailed) {
	return {
		type: GET_FACES,
		faces: faces,
		getFacesFailed: getFacesFailed
	}
}