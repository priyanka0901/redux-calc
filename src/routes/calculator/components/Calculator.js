 import React from 'react';
 import PropTypes from 'prop-types';
 import './calculator.scss';


class Calculator  extends React.Component {
    constructor(props){
       super(props)
     }

    render() {
        const { calcState, addElem, clear, equal } = this.props;
        return (
             <div className="App">
               <div className="value-container">
                 <input type="text" value={calcState.calValue} />
               </div>
               <div className="buttons-container">
                    {calcState.calBtns.map((item, key) => {
                        if(item == "C"){
                            return(
                               <button onClick={clear.bind(this) } key={key}>{item}</button>
                            )
                           }else if(item == "="){
                                return(
                                <button onClick={equal.bind(this, calcState.calValue) } key={key}>{item}</button>
                             )
                           } else {
                             return(
                               <button onClick={addElem.bind(this, item) } key={key}>{item}</button>
                             )
                           }
                         })}
                </div>
             </div>
           );
    }
}


Calculator.PropTypes = {
    calValue    : PropTypes.number.isRequired,
    calBtns     : PropTypes.array.isRequired,
    calReducer  : PropTypes.func.isRequired
}

 export default Calculator; 