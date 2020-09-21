

export const dispatchStateToProps = (dispatch) => {
    return {
       scoreUp: (value) => dispatch({type: 'UP', payload: value}),
       scoreDown:  (value) => dispatch({type: 'DOWN', payload: value})
    }

}
