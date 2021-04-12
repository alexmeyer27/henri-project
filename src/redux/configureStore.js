import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import feedReducer, {
	namespace as feedNamespace,
	defaultState as feedDefaultState
} from './reducers/feed/reducer';

import usersReducer, {
	namespace as usersNamespace,
	defaultState as usersDefaultState
} from './reducers/user/reducer';

createRootReducer = () => {
	const combineReducer = combineReducers({
		[feedNamespace]: feedReducer,
		[usersNamespace]: usersReducer,
	})

	const rootReducer = (state, action) => {
		return combineReducer(state, action)
	}
	return rootReducer;
}

const rootReducer = createRootReducer();

export default () => {
	let store = createStore(rootReducer, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	return { store }
}