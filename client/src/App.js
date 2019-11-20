import React from 'react';
import './styles/styles.scss';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import './firebase/firebase';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
