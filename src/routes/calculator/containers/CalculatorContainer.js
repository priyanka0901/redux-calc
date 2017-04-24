import {connect} from 'react-redux';
import {calculatorReducer,calcState} from '../modules/calculator';
import Calculator from '../components/Calculator';

const mapStateToProps = (state) =>{
    return state.calculator;
}

const mapDispatchToProps = (dispatch) => {
    return{
        addElem: (text) =>{
            dispatch({
                type: 'ADD_ELEM',
                payload: text
            })
        },
        clear: () =>{
            dispatch({
                type: 'CLEAR'
            })
        },
        equal: (calValue) => {
            dispatch({
                type: 'EQUAL',
                payload: calValue
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator) 




