import { Dispatch } from 'redux'
import { AlertDispatchTypes, Remove_Alert, Set_Alert } from './types'
import { v4 as uuidv4 } from 'uuid';


// functions in typescript need to describe types of parameters and return value
// AlertDispatchTypes include the cases to return Set_Alert or Remove_Alert. ?look into action/types.ts

export const setAlert = (message: string, alertType: string) => (dispatch: Dispatch<AlertDispatchTypes>) => {
    
    // variable has its own type
    const id: string = uuidv4();

    dispatch({ type: Set_Alert, payload: { id: id, message: message, type: alertType } })
    setTimeout(()=>dispatch({ type: Remove_Alert, payload: id }), 5000);
}