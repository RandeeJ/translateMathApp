import React, { Component } from 'react';
import axios from 'axios';

class HistoryItem extends Component {

  constructor(props) {
    super(props)
  
  // this.state = {
  //   valueOne: this.props.valueOne,
  //   valueTwo: this.props.valueTwo,
  //   operation: this.props.operation,
  //   valueAnswer: this.props.valueAnswer,
  // }

  } 


  

render() {
   
  // props.func({this.props.item.id})


    const {valueOne, valueTwo, operation, valueAnswer, id} = this.props.item;
    console.log("--------->>",this.props, this.props.id, this.props.item.id)

  return (

<div>

    <div key={id}>
      <ul>
      <li> 
        <div className="calculation-history__item">
          {valueOne} {operation} {valueTwo} = {valueAnswer} 
        </div>
      <a onClick={() => this.props.handleDeleteClick(this.props.id)
}>Delete</a>
      </li>
      </ul>
    </div>
    </div>
  );
}
}

export default HistoryItem;