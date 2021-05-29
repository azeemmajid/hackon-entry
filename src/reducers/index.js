import { combineReducers } from 'redux';

const logs = (state = [], action) => {
	switch(action.type) {
		case 'ADD_LOG':
			return [
				...state,
				{
					state: action.state,
					activity: action.activity,
					timestamp: (new Date()).getTime(),
                	id: action.id,
				}
			]
		case 'SET_LOG_STATE':
			return state.map((item) => {
				if(item.id !== action.id) {
					return item;
				}

				return {
					...item,
					state: action.state,
				};
			})
		case 'RESET_LOG':
			return [];
		default:
			return state;
	}
};

const symbl = (state = { token: '' }, action) => {
	switch(action.type) {
		case 'SET_SYMBL':
			return {
				...state,
				token: action.token
			};
		default:
			return state;
	}
}

export default combineReducers({
	logs,
	symbl,
});