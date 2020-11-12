import { Remove_Alert, Set_Alert } from "../actions/types";

interface AlertState {
    alerts: any[]
}
const initialState = {
    alerts: []
}
const alert = (state: AlertState = initialState, action: any): AlertState => {
    const { type, payload } = action;

    switch(type) {
        case Set_Alert:
            return {...state, alerts: [...state.alerts, payload]} // payload is an object of alert
        case Remove_Alert:
            return {...state, alerts: state.alerts.filter(alert => alert.id !== payload)} // payload is the id of alert
        
        default:
            return state;
    }
    
}
export default alert;