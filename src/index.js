import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import appointmentsApp from './redux/reducer.js'
import Keycloak from 'keycloak-js'

let initOptions = {
    url: 'http://localhost:8081/auth', realm: 'test-realm', clientId: 'test-react-app', onLoad: 'login-required'
}

let keycloak = new Keycloak(initOptions);
keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    const store = createStore(appointmentsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



}).error(() => {
    console.error("Authenticated Failed");
});
