

export const mapDispatchToProps = dispatch => {
    return {
        ageUp: (value) => dispatch({type: 'UP', payload: value}),
        ageDown: (value) => dispatch({type: 'DOWN', payload: value})
    }
}