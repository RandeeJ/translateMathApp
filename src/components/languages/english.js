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
        
        // LOOK INTO REPLACE FUNCTION TO SUBSTITUTE NEGATIVE IN FOR MINUS
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
        // https://www.w3schools.com/jsref/jsref_replace.asp
        
        const { languageTitle } = this.state;

        // console.log("english component", valueOne, 
        // valueAnswer
        // )

        return (
            <div>
                <div className='english-translation'>
                    <h2>{languageTitle} translation</h2>

                    <div className='translation'>
                        {englishOne} {operation} {englishTwo} = {englishAnswer}
                    </div>
                </div>

                <CalculationHistory props={this.props}/>


            </div>
        );
    }
}

    

export default English;