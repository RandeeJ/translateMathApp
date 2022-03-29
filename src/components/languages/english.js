import React, { Component } from 'react';
import n2words from 'n2words';
import CalculationHistory from '../history';



class English extends Component {
    constructor(props){
        super(props);

        this.state={
            languageTitle: "English"
        }
    }


    render() {

        var n2words = require('n2words');

        const {valueOne, valueTwo,
            valueAnswer, operation
        } = this.props;

        const englishOne = n2words(valueOne, {lang: 'en'}).replace("minus", "negative");
        const englishTwo = n2words(valueTwo, {lang: 'en'}).replace("minus", "negative");
        const englishAnswer = n2words(valueAnswer, {lang: 'en'}).replace("minus", "negative");
        
        
        const { languageTitle } = this.state;


        return (
            <div key={languageTitle} className='translation-container'>
                <div className='english-translation'>

                    <div className='translation'>
                        {englishOne} {operation} {englishTwo} = {englishAnswer}
                    </div>
                

                <CalculationHistory {...this.props}/>
                </div>

            </div>
        );
    }
}

    

export default English;