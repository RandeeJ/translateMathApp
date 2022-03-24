import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



import Calculator from './calculator';

class App extends Component {
  


    state = {
        valueOne: 0,
        valueTwo: 0,
  }


incrementL = () => {
  this.setState({valueOne: this.state.valueOne + 1})}

decrementL = () => {
  this.setState({valueOne: this.state.valueOne - 1})}





incrementR = () => {
  this.setState({valueTwo: this.state.valueTwo + 1})}

decrementR = () => {
  this.setState({valueTwo: this.state.valueTwo - 1})}





  render() {

    

      const inputOne = document.getElementById("inputOne")


        const valueOne = Number(this.state.valueOne);
        const valueTwo = Number(this.state.valueTwo);
      

    return (
      <div className = "app">
          <div className='app__title'>
            <h1>Translate Math App</h1>
            <h2>Translate any math calculation into another language!</h2>
          </div>

          <div className="userInput">
            <form className="userInput-form" 
            >

                <div className='userInput-form__left-value'>
                <label>
                <button id="decrement"
                type="button"
                className='inputButton'
                onClick={() => this.decrementL()}> <FontAwesomeIcon className="fa" icon={faMinus} /> </button>
                </label>
                <input type="number" 
                id="inputOne"
                className="userInput-form__valueOne"
                placeholder="Your First Value"
                name="valueOne"
                value = {valueOne}
                />
                <label>
                <button id="increment" 
                className='inputButton' 
                type="button"
                onClick={() => this.incrementL()}> <FontAwesomeIcon className="fa" icon={faPlus} /> </button>
                </label>
                </div>


                
                <div className='userInput-form__right-value'>
                <label>
                <button id="decrement"
                type="button" 
                className='inputButton'
                onClick={() => this.decrementR()}> <FontAwesomeIcon className="fa" icon={faMinus} /> </button>
                </label>
                <input type="number"
                id="inputTwo"
                className="userInput-form__valueTwo"
                placeholder="Your Second Value"
                name= "valueTwo"
                value = {valueTwo} 
                />
                <label>
                <button id="increment"
                type="button"
                className='inputButton'
                onClick={() => this.incrementR()}> <FontAwesomeIcon className="fa" icon={faPlus} /> </button>
                </label>
                </div>


            </form>
            </div>
          <div className="calculator-container">
            <Calculator valueOne={valueOne} valueTwo={valueTwo}/>
          </div>

      
      </div>

    );
    }
  }

export default App;