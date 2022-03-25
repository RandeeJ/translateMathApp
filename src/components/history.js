import React, { Component } from "react";
import axios from "axios";

import HistoryItem from "./historyItem";

class CalculationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOne: this.props.valueOne,
      valueTwo: this.props.valueTwo,
      operation: this.props.operation,
      valueAnswer: this.props.valueAnswer,
      id: this.props.id,
      historyItems:[]
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSuccessfulPost(historyItems){
    this.setState({
      historyItems: [historyItems].concat(this.state.historyItems)
    })
  }

  
  saveCalculation(event) {
    console.log( "save calculation function" , this.state),
    axios
      .post("https://rj-cp-tma-api.herokuapp.com/calculation", {
        valueOne: this.state.valueOne,
        operation: this.state.operation,
        valueTwo: this.state.valueTwo,
        valueAnswer: this.state.valueAnswer,
        id: this.state.id
      })
      .then((response) => {
        this.handleSuccessfulPost(response.data);

        this.setState({
          valueOne: this.state.valueOne,
          operation: this.state.operation,
          valueTwo: this.state.valueTwo,
          valueAnswer: this.state.valueAnswer,
          id: this.state.id

        })
        console.log("Save");
        // handle success
      })
      .catch((error) => {
        // handle error
        console.log("save calculation post request error", error);
      });
  }




  getCalculations() {
    axios
      .get("https://rj-cp-tma-api.herokuapp.com/calculations")
      .then((response) => {
        // handle success
        this.setState({
          historyItems: this.state.historyItems.concat(response.data)
        });
      })
      .catch((error) => {
        // handle error
        console.log("getCalculations request error", error);
      })
    }
      



  handleDeleteClick(id){
    console.log("---->", (id))
    axios.delete(`https://rj-cp-tma-api.herokuapp.com/calculation/${id}`)
    .then((response) => {
    console.log("delete button clicked", id)

      this.setState({
        historyItems: this.state.historyItems.filter((item) => {
          return item.id !== id;
        })
      });
      return response.data;
    }).catch(error => {
      console.log("handleDeleteClick error", error);
    })
  }






  calculationList() {
    return this.state.historyItems.reverse().map((item) => {
      console.log("calculation item", item, item.id);
      return(
        <div key={`calculation-item-${item.id}`}>
          <HistoryItem item={item} id={item.id} handleDeleteClick={this.handleDeleteClick}/>
        </div>
      )
  })}


handleSubmit() {
  this.saveCalculation()
  this.getCalculations()
}



  render() {

console.log("state.item.id", this.state.historyItems)

    return (
      <div className="history-container">
        <div className="save-calculation-container">
          <button
            className="save-calculation"
            type="button"
            onClick={() => this.handleSubmit()}
          > Add To List <br/> 
          </button>
        </div>

        <div className="calculation-history">

          {this.calculationList()}
          
        </div>
      </div>
    );
  }
}

export default CalculationHistory;
