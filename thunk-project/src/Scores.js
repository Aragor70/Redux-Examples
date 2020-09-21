import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { /* dispatchFunction, */ addScore, reduceScore } from './action/Score';


class Scores extends Component {

    state = {
        score: this.props.score
    }

    /* scoreHandler = (e) => {
        if (e === 'add') {
            this.setState({ score: ++this.state.score })
        }
        else if (e === 'reduce') {
            this.setState({ score: --this.state.score })
        }
        else return this.state.score
    } */

        handleChange = (e) => {
            if(e === 'add') {
                return this.props.addScore(this.state.score + 1)
            }
            if(e === 'reduce') {
                return this.props.reduceScore(this.state.score - 1)
            }
            return this.props.state;
        }
    render() {

        return (

            <Fragment>
                
                <h1>Score: <span>{this.props.score}</span></h1>
                <button onClick={e=> this.handleChange('add')}>ADD</button>
                <button onClick={e=> this.handleChange('reduce')}>REDUCE</button>
                
            </Fragment>

        )
    }
}
const mapStateToProps = state => ({
    score: state.reducer.score
})
export default connect(mapStateToProps, { addScore, reduceScore })(Scores);