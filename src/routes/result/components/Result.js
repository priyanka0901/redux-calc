import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>
                <h1>Hey Your Result:</h1>
                <p> Increment Value :{this.props.counter} </p>
                <p> Calculation Value:{this.props.calculator.calcState.calValue} </p>
            </div>
        );
    }
}

export default Result;