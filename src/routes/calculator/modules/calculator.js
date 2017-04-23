//actions

export const calcState = {
    calValue : 0,
    calBtns : ["1", "2", "3", "C ","4", "5", "6", "=", "7", "8", "9", ".", "+", "0", "-", "*", "/"]
}

// reducer
export const calcReducer = (state = calcState, action ) =>{
    switch(action.type){
        case 'ADD_ELEM':
        return {
            ...state,
            calValue:state.calValue == 0? action.text : state.calValue + action.text
        }
        case 'CLEAR':
        return {
            ...state,
            calValue: 0
        }
        case 'EQUAL':
        return {
            ...state,
            calValue: eval(action.calValue)
        }
        default:
        return state;
    }
}