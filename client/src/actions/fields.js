export const addField = (field) => {

    return (dispatch) => {
        dispatch({
            type: 'ADD_FIELD',
            field
        });
    };

};