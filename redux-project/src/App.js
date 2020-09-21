import React, { Fragment } from 'react';
import reactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import store from '../store/index';

const App = () => {


    return (
        <Provider store = { store }>
        <Main />
        </Provider>
    )
}
reactDOM.render(<App />, document.getElementById('zone'));