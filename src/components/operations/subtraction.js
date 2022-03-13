import React, { Component } from 'react';
import Translation from '../translation';


class Subtraction extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne - valueTwo;
        const minus = " - ";        
            return(
                <div className='subtraction-calculation'>
                <div className='calculation'>
                    {valueOne} - {valueTwo} = {valueAnswer}

                    </div>

                    <Translation valueOne = {valueOne} valueTwo = {valueTwo} valueAnswer={valueAnswer} operation={minus}/>
                </div>
            )
    }
}


export default Subtraction;