import React, { Component } from 'react';
import axios from 'axios';

class HistoryItem extends Component {

  constructor(props) {
    super(props)
  

  this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(){
    console.log("delete button clicked", this.props)
    axios.delete(`http://127.0.0.1:5000/calculation/${this.props.id}`, 
    {withCredentials: false}
    )
    .then(response => {
      // this.setState({
      //   this.props: this.state.props.filter(item => {
      //     return item.id !== this.props.id;
      //   })
      // })
      // return response.data;
      console.log("response from delete", response);
    }).catch(error => {
      console.log("handleDeleteClick error", error);
    })
  }
  

render() {
   
    const {valueOne, valueTwo, operation, valueAnswer, id} = this.props.item;

  return (

<div>

    <div key={this.props.id}>
      <ul>
      <li> 
        <div className="calculation-history__item">
          {valueOne} {operation} {valueTwo} = {valueAnswer} 
        </div>
      <a onClick={() => this.handleDeleteClick()}>Delete</a>
      </li>
      </ul>
    </div>
    </div>
  );
}
}

export default HistoryItem;