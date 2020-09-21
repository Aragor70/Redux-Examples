import { createStore, applyMiddleware } from 'redux';
import score from './reducers/score';

const logAction = store => next => action => {
    const effect = next( action )
    console.log(JSON.stringify(effect))
    return effect
}

const store = createStore(score, applyMiddleware(logAction))

export default store;