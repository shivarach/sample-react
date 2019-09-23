import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import appointmentsApp from "./redux/reducer";
import {cancelAppointment, createAppointment} from "./redux/actions";


const store = createStore(appointmentsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function storeDetails() {
    console.log(store.getState());
}

store.subscribe(storeDetails);

store.dispatch(createAppointment("patient A"));
store.dispatch(createAppointment("patient B"));
store.dispatch(cancelAppointment(0));


ReactDOM.render(<App />, document.getElementById('root'));

