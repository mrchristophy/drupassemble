import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import projectsReducer from "../reducers/projectsReducer";
import contentTypesReducer from "../reducers/contentTypesReducer";
import usersReducer from "../reducers/usersReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            contentTypes: contentTypesReducer,
            user: usersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};