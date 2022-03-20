import React, {Component} from "react";
// import { connect } from "react-redux";
import Calculation from "./calculation";

class Calculator extends Component {
    constructor(props){
        super(props);
    
    }
    render () {
        const {valueOne, valueTwo } = this.props;

        return (
            <div className="value-display">
                {/* <h2 className="value-display__text">
                    Your numbers are {valueOne} and {valueTwo}!
                </h2> */}

                <h1 className="calculation-container">
                    <Calculation  valueOne={valueOne} valueTwo={valueTwo}/>
                </h1>
          </div>
        )        
    }
}
    
// const mapStateToProps = (state) => {
//     console.log("mapStateToProps", state);
//     return{
//       valueOne: state.valueOne,
//       valueTwo: state.valueTwo,
//     //   valueAnswer: state.valueAnswer
//     }
//   }

// export default connect(mapStateToProps)(Calculator);
export default Calculator;