const contentTypesReducerDefaultState = [];

export default (state = contentTypesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CONTENT_TYPE':
            return [...state, action.contentType];
        case 'SET_CONTENT_TYPES':
            return action.contentTypes;
        default:
            return state;
    }
};