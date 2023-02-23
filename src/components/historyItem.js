import React, { Component } from 'react';
import axios from 'axios';

class HistoryItem extends Component {

  constructor(props) {
    super(props)

  } 


  

render() {
   

    const {valueOne, valueTwo, operation, valueAnswer, id} = this.props.item;

  return (

<div>

  <ul>
      <li className="calculation-history__item" key={id}> 
        <div className={`calculation-history__item-text calculation-history__text-${id}`}>
          {valueOne} {operation} {valueTwo} = {valueAnswer} 
        </div>
      <a className="calculation-history__item-delete"
      onClick={() => this.props.handleDeleteClick(this.props.id)
}>Delete</a>
      </li>
      </ul>
    </div>
  );
}
}

export default HistoryItem;