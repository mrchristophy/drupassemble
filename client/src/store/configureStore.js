import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import projectsReducer from "../reducers/projectsReducer";
import contentTypesReducer from "../reducers/contentTypesReducer";
import usersReducer from "../reducers/usersReducer";
import thunk from 'redux-thunk';
import projectDetailReducer from "../reducers/projectDetailReducer";
import contentTypeDetailReducer from "../reducers/contentTypeDetailReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
            project: projectDetailReducer,
            contentTypes: contentTypesReducer,
            contentType: contentTypeDetailReducer,
            user: usersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};