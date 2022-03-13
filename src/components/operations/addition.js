import React, { Component } from 'react';
import Translation from "../translation"


class Addition extends Component {

    constructor(props){
        super(props);

        this.state ={
            name: "operation"
        };
    }
    
    render() {
        const {valueOne, valueTwo } = this.props;
        const valueAnswer = valueOne + valueTwo;
        const plus = " + ";
            return(
                <div className='addition-calculation'>
                    <div className='calculation'>
                    {valueOne} + {valueTwo} = {valueAnswer}
                    </div>
                    <Translation valueOne = {valueOne} valueTwo = {valueTwo} valueAnswer = {valueAnswer} operation={plus}/>
                </div>
            )
    
}
}

export default Addition;