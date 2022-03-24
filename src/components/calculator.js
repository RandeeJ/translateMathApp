import React, {Component} from "react";
import Calculation from "./calculation";

class Calculator extends Component {
    constructor(props){
        super(props);
    
    }
    render () {
        const {valueOne, valueTwo } = this.props;

        return (
            <div className="value-display">
               

                <h1 className="calculation-container">
                    <Calculation  valueOne={valueOne} valueTwo={valueTwo}/>
                </h1>
          </div>
        )        
    }
}
export default Calculator;