


/* export const dispatchFunction = () => dispatch => {
    return {
        addScore: () => dispatch({ type: 'ADD' }),
        reduceScore: () => dispatch({ type: 'REDUCE' })
    }
} */

export const addScore = (value) => dispatch => {
    return dispatch({ type: 'ADD', payload: value })
}

export const reduceScore = (value) => dispatch => {
    return dispatch({ type: 'REDUCE', payload: value })
}