import React, { Component } from 'react';
import Addition from './operations/addition';
import Subtraction from "./operations/subtraction";
import Multiplication from './operations/multiplication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus, faSquareXmark } from '@fortawesome/free-solid-svg-icons';



class Calculation extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "operation",
            showHideAddition: false,
            showHideMultiplication: false,
            showHideSubtraction: false
        }
    }

hideCalculation = (name) => {
    switch(name){
        case "showHideAddition":
            this.setState({
                showHideAddition: true,

                showHideMultiplication: false,
                showHideSubtraction: false
            });
            break;
        case "showHideMultiplication":
            this.setState({ 
                showHideMultiplication: true,

                showHideAddition: false,
                showHideSubtraction: false
            });
            break;
        case "showHideSubtraction":
            this.setState({ 
                showHideSubtraction: true,
                
                showHideAddition: false,
                showHideMultiplication: false
            });
            break;
        default:
            null;

    }
}

    

    

    render() {
        const {valueOne, valueTwo } = this.props;
        const {showHideAddition, showHideMultiplication, showHideSubtraction} = this.state
        
        return (

            <div key={valueOne} className='calculation'>
                <div className='operation-buttons'>
                    <button className="operation-buttons__addition" type="button" onClick={() => {this.hideCalculation("showHideAddition")}}>
                    <FontAwesomeIcon className="operation-icon" icon={faSquarePlus} />
                    </button>
                    <button className='operation-buttons__subtraction' type="button" onClick={() => {this.hideCalculation("showHideSubtraction")}}>
                    <FontAwesomeIcon 
                    className="operation-icon"
                    icon={faSquareMinus} />
                    </button>
                    <button className='operation-buttons__multiplication' type="button" onClick={() => {this.hideCalculation("showHideMultiplication")}}>
                    <FontAwesomeIcon 
                    className="operation-icon"
                    icon={faSquareXmark} />
                    </button>

                </div>



            <div className = "calculation__view">
                {showHideAddition && <Addition className="calculation__view__addition" 
                valueOne={valueOne} valueTwo={valueTwo}
                />}
                {showHideSubtraction && <Subtraction className="calculation__view__subtraction" 
                valueOne={valueOne} valueTwo={valueTwo}
                />}
                {showHideMultiplication && <Multiplication className="calculation__view__multiplication" 
                valueOne={valueOne} valueTwo={valueTwo}
                />}
            </div>
            </div>
        );
    }
}

export default Calculation;