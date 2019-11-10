import React from 'react';
import './styles/styles.scss';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import './firebase/firebase';
import {startSetProjects} from "./actions/projects";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}


store.dispatch(startSetProjects());

export default App;
