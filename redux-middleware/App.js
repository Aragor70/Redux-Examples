import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { dispatchStateToProps } from './action/score';


class App extends Component {


    render() {


        return (
            <Fragment>
                <h1>Score: <span>{this.props.score}</span></h1>
                <button onClick={e=>this.props.scoreUp(this.props.score + 1)}>up</button>
                <button onClick={e=>this.props.scoreDown(this.props.score - 1)}>down</button>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    score: state.score
})
export default connect(mapStateToProps, dispatchStateToProps)(App);