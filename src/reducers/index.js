import { combineReducers } from 'redux';

const logs = (state = [], action) => {
	switch(action.type) {
		case 'ADD_LOG':
			console.log(action);
			return [
				...state,
				{
					state: action.state,
					activity: action.activity,
					timestamp: (new Date()).getTime(),
                	id: action.id,
				}
			]
		case 'RESET_LOG':
			return [];
		default:
		return state;
	}
};

export default combineReducers({
	logs
});