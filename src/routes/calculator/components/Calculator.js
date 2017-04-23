 import React from 'react';
 import PropTypes from 'prop-types';

class Calculator  extends React.Component {
    constructor(props) {
    super(props);
  }
  render() {
    return(
        <div>
            <h1>heyaa </h1>
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