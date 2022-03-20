import React, { Component } from 'react';
import Translation from '../translation';


class Multiplication extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne * valueTwo;
        const multiply = " x ";
            return(
                <div>
                <div className='multiplication-calculation'>
                <div className='multiplication-calculation__calculation'>
                    {valueOne} * {valueTwo} = {valueAnswer}
                    </div>
                    </div>

                    <Translation valueOne = {valueOne} valueTwo = {valueTwo} valueAnswer={valueAnswer} operation={multiply}/>
                </div>
            )
    }
}


export default Multiplication;