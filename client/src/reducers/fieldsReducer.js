const fieldsReducerDefaultState = [];

export default (state = fieldsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FIELD':
            console.log(action);
            return [...state, action.field];
        case 'DELETE_FIELD':
            return state;
        default:
            return state;
    }
};