export const addLog = ({ state, activity, id }) => {
    return {
        type: 'ADD_LOG',
        state,
        activity,
        id,
    };
};

export const setLogState = ({ id, state }) => {
	return {
		type: 'SET_LOG_STATE',
		id,
		state,
	}
};

export const resetLog = () => {
	return {
		type: 'RESET_LOG',
	};
};

export const setSymbl = ({ token }) => {
	return {
		type: 'SET_SYMBL',
		token,
	}
};
