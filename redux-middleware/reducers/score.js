


const initialState = {
    score: 5
}

const score = (state = initialState, action) => {
    const { type, payload } = action
    if (type === 'UP') {
        return { ...state, score: payload }
    }
    if (type === 'DOWN') {
        return { ...state, score: payload }
    }
    return state;

}
export default score;