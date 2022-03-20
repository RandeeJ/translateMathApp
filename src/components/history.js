import React, { Component } from "react";
import axios from "axios";

import HistoryItem from "./historyItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class CalculationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOne: this.props.valueOne,
      valueTwo: this.props.valueTwo,
      operation: this.props.operation,
      valueAnswer: this.props.valueAnswer,
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
    console.log( "save calculation function" , this.state),
    axios
      .post("http://127.0.0.1:5000/calculation", {
        valueOne: this.state.valueOne,
        operation: this.state.operation,
        valueTwo: this.state.valueTwo,
        valueAnswer: this.state.valueAnswer,
      })
      .then((response) => {
        // console.log("Save");
        // handle success
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
        console.log(response.data);
        this.setState({
          data: [...response.data],
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


  



  calculationList() {
    return this.state.data.reverse().map((item, id) => {
      console.log("calculation item", item, id);
      return(
        <div key={id}>
          <HistoryItem item={item} id={id}/>
        </div>
      )
  })}


// calculationList()


  // componentDidMount() {
  //     this.getCalculations();
  //   }


handleSubmit() {
  this.saveCalculation()
  this.getCalculations()
}



  render() {

    return (
      <div>
        <div className="save-calculation-container">
          <button
            className="save-calculation"
            type="submit"
            onClick={() => this.handleSubmit()}
          > Add To List <br/> 
            <FontAwesomeIcon icon={faArrowRight} /> 
          </button>
        </div>

        <div className="calculation-history">

        <h1> Previously Saved Calculations </h1>

          {this.calculationList()}
          
          
          <ul>

          {/* when this component loads, need to get history. ComponentDidMount
          state (history) (look into) */}

          </ul>
        </div>
      </div>
    );
  }
}

export default CalculationHistory;


// <div className='right-column'>
// <HistoryList data={this.state.historyItem}/>
// </div>