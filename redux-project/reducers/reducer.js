

const initialState = {
    age: 5
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'UP':
            return { ...state, age: payload }
        case 'DOWN':
            return { ...state, age: payload }
        default:
            return state;
    }
}
export default reducer;