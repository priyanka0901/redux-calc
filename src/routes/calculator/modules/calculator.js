//actions
export const calcState = {
    calValue : 0,
    calBtns :  [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", ".", "+", "0", "-", "*", "/" ]
}

// reducer
const calcReducer = (state = {calcState}, action ) =>{

    const calcState = Object.assign({}, state.calcState);
    switch(action.type) { 

        case 'ADD_ELEM':
        const newCalcState = Object.assign({}, state.calcState, {calValue: calcState.calValue == 0? action.payload : calcState.calValue + action.payload});
        return {
            ...state,
            calcState: newCalcState
        } 

        case 'CLEAR':
        const newCalcClear = Object.assign({}, state.calcState, {calValue:0})
        return {
            ...state,
            calcState: newCalcClear
        }

        case 'EQUAL':
        const newCalcEqual = Object.assign({}, state.calcState, {calValue:eval(action.payload)})
        return{
            ...state,
            calcState: newCalcEqual
        }

        default:
        return state;
    }
}


export default calcReducer;

