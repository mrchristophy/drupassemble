const usersReducterDefaultState = {
    email: '',
    userLoaded: false
};


export default (state = usersReducterDefaultState, action) => {

    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, email: action.credentials.email, userLoaded: true};
        case 'GET_USER':
            return {...state, ...action.user, userLoaded: true}
        default:
            return state;

    }

}