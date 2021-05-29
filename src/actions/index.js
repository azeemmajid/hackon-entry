export const addLog = ({ state, activity, id }) => {
    return {
        type: 'ADD_LOG',
        state,
        activity,
        id,
    };
};

export const resetLog = () => {
    return {
        type: 'RESET_LOG',
    };
};
