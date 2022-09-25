import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import rootReducer from "./redux/index";

const store = configureStore({
    reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
);

