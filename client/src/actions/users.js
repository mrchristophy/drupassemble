export const getUser = (user) => {
    return {
        type: 'GET_USER',
        user
    }
};

export const startGetUser = () => {
    return (dispatch) => {
        fetch('/user', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(getUser(data))
        });
    };
};

export const loginUser = (credentials) => {
    return {
        type: 'LOGIN_USER',
        credentials
    }
};

export const startLoginUser = (credentialsData = {}) => {

    return (dispatch) => {
        const {
            email = '',
            password = ''
        } = credentialsData;

        const credentials = {email, password};

        fetch(`/auth`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: `email=${email}&password=${password}` // <-- Post parameters
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(loginUser({
                email: data.email
            }))
        });


    };

};


