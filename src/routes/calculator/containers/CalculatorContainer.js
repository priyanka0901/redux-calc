import {connect} from 'react-redux';
import {calculatorReducer} from '../modules/calculator';

import Calculator from '../components/Calculator';

const mapStateToProps = (state) =>{
    return{
        calValue:state.calValue,
        calBtns:state.calBtns
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addElem: (text) =>{
            dispatch({
                text: 'ADD_ELEM',
                text
            })
        },
        clear: () =>{
            dispatch({
                text: 'CLEAR'
            })
        },
        equal: (calValue) => {
            dispatch({
                text: 'EQUAL',
                calValue
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator) 