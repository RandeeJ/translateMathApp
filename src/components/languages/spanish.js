import React, { Component } from 'react';
import n2words from 'n2words';
import CalculationHistory from '../history';


export default class Spanish extends Component {
    constructor(){
        super();

        this.state={
            languageTitle: "Spanish"
        }
    }
    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            valueAnswer, operation
        } = this.props;

        const spanishOne = n2words(valueOne, {lang: 'es'});
        const spanishTwo = n2words(valueTwo, {lang: 'es'});
        const spanishAnswer = n2words(valueAnswer, {lang: 'es'})
        
        
        const { languageTitle, 
        } = this.state;


        return (
            <div className='translation-container'>
                <div className='spanish-translation'>

                    <div className='translation'>
                        {spanishOne} {operation} {spanishTwo} = {spanishAnswer}
                    </div>
                

                <CalculationHistory {...this.props}/>

                </div>
                </div>
        );
    }
}