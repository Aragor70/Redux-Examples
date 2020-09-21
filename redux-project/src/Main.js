import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {ageUp, ageDown, mapDispatchToProps} from '../action/index';

class Main extends Component {
    
    /*
     state = {
        age: this.props.age
    }
    
    clickHandler = (e) => {
        if (this.state.age > e) {
            this.setState({age: e})
        } else {
            this.setState({age: e})
        }
    } */

    render() {

        const {ageUp, ageDown} = this.props

        return (
            <Fragment>
                <div className="output">
                    <h1>Age: <span>{this.props.age}</span></h1>
                    <button type="button" onClick={e=>ageUp(this.props.age + 1)}>Up</button>
                    <button type="button" onClick={e=>ageDown(this.props.age - 1)}>Down</button>
                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    age: state.age
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);