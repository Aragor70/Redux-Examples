

const initialState = {
    score: 5,
    error: {}
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'ADD':
            return { ...state, score: payload }
        case 'REDUCE':
            return { ...state, score: payload }
        default:
            return state;
    }

    /* if(type === 'ADD') {
        return { ...state, score: ++state.score }
    }
    if(type === 'REDUCE') {
        return { ...state, score: --state.score }
    }
    return state; */
    
}
export default reducer;