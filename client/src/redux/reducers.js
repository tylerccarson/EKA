import { combineReducers } from 'redux';
import { SET_USER_ID } from './actions.js';

const userId = (state = 0, action: Action) => {
	if (action.type === SET_USER_ID) {
		return action.payload;
	}
	return state;
};

const rootReducer = combineReducers({ userId });

export default rootReducer;