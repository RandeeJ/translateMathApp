import React, { Component } from 'react';
import n2words from 'n2words';
import CalculationHistory from '../history';


export default class French extends Component {
    constructor(){
        super();

        this.state={
            languageTitle: "French"
        }
    }
    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            valueAnswer, operation
        } = this.props;

        const frenchOne = n2words(valueOne, {lang: 'fr'});
        const frenchTwo = n2words(valueTwo, {lang: 'fr'});
        const frenchAnswer = n2words(valueAnswer, {lang: 'fr'})
        
        
        const { languageTitle, 
            // operation 
        } = this.state;

        console.log("french component", valueOne)

        return (
            <div>
                <div className='french-translation'>
                    <h2>{languageTitle} translation</h2>

                    <div className='translation'>
                        {frenchOne} {operation} {frenchTwo} = {frenchAnswer}
                    </div>

                    <CalculationHistory props={this.props}/>

                </div>
            </div>
        );
    }
}