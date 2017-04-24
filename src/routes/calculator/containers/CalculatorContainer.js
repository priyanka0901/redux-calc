import {connect} from 'react-redux';
import {calculatorReducer} from '../modules/calculator';
import Calculator from '../components/Calculator';

const mapStateToProps = (state) =>{
    return state.calculator;
}

const mapDispatchToProps = (dispatch) => {
    return{
        addElem: (text) =>{
            dispatch({
                type: 'ADD_ELEM',
                text
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
                calValue
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator) 




