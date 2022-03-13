import React, { Component } from "react";
import axios from "axios";

class CalculationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOne: 0,
      valueTwo: 0,
      operation: 0,
      valueAnswer: 0,
      data:[]
    };
  }

  componentDidMount(){
    this.setState({
      valueOne: this.props.valueOne,
      valueTwo: this.props.valueTwo,
      operation: this.props.operation,
      valueAnswer: this.props.valueAnswer,
    });
  }

  saveCalculation() {
    // console.log(this.state.valueOne)

    axios
      .post("http://127.0.0.1:5000/calculation", {
        valueOne: this.state.valueOne,
        operation: this.state.operation,
        valueTwo: this.state.valueTwo,
        valueAnswer: this.state.valueAnswer,
      })
      .then((response) => {
        console.log("Save");
        // handle success

        //   this.setState({
        // valueOne: response.data.valueOne,
        // valueTwo: response.data.valueTwo,
        // valueAnswer: response.data.valueAnswer
        //   })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  getCalculations() {
    axios
      .get("http://127.0.0.1:5000/calculations")
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          data: response.data,
         
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    console.log("HELLO",this.props);
    return (
      <div>
        <div className="save-calculation-container">
          <button
            className="save-calculation"
            type="submit"
            onClick={() => this.saveCalculation()}
          >
            Save Calculation
          </button>
        </div>

        <div className="calculation-history">
          <ul>
          {this.state.data.map(item=>{
            <div>
              {item.valueOne}
              {item.operation === "multiplication " && <div>*</div>}
              {item.valueTwo}
              =
              {item.valueAnswer}
            </div>
          })}

          </ul>
        </div>
      </div>
    );
  }
}

export default CalculationHistory;
