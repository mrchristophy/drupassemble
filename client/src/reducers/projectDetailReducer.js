const projecDetailReducerDefaultState = [];


export default (state = projecDetailReducerDefaultState, action) => {


    switch (action.type) {
        case 'SET_PROJECT_DETAIL':
            return action.project
        default:
            return state;

    }

}