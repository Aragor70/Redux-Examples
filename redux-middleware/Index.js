import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const Index = () => {


    return (
        <Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </Fragment>
    )
}
ReactDOM.render(<Index />, document.getElementById("zone"))