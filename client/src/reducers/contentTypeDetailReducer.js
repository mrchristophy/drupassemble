const contentTypeDetailReducerDefaultState = [];

export default (state = contentTypeDetailReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CONTENT_TYPE_DETAIL':
            return action.contentType;
        default:
            return state;
    }
};