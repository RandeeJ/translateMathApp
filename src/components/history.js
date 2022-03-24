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
      id: this.props.id,
      historyItems:[]
    };

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
// if you ever take a function from your class and you pass it anywhere else
// you need to take it and bind it - if you take a function and pass it anywhere and you are using the this keyword, it needs to be bound. when you call bind, it changes the default value of the this keyword.
  }

  handleSuccessfulPost(historyItems){
    this.setState({
      historyItems: [historyItems].concat(this.state.historyItems)
    })
  }

  
  saveCalculation(event) {
    console.log( "save calculation function" , this.state),
    axios
      .post("http://127.0.0.1:5000/calculation", {
        valueOne: this.state.valueOne,
        operation: this.state.operation,
        valueTwo: this.state.valueTwo,
        valueAnswer: this.state.valueAnswer,
        id: this.state.id
        // id: 0
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
      .get("http://127.0.0.1:5000/calculations")
      .then((response) => {
        // handle success
        // console.log(response.data);
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
  //   // const id = response.data.id;
    console.log("---->", (id))
    axios.delete(`http://127.0.0.1:5000/calculation/${id}`, 
  // //   {withCredentials: false}
    )
    .then((response) => {
    console.log("delete button clicked", id)
    // console.log("response from delete", props);

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



// passID(data){
//   console.log(data)
// }


  render() {

console.log("state.item.id", this.state.historyItems)

    return (
      <div className="history-container">
        <div className="save-calculation-container">
          <button
            className="save-calculation"
            // type="submit"
            type="button"
            onClick={() => this.handleSubmit()}
          > Add To List <br/> 
            {/* <FontAwesomeIcon icon={faArrowRight} />  */}
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
