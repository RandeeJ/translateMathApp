import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



import Calculator from './calculator';
// import CalculationHistory from './history';
// import HistoryList from "./historyList";

class App extends Component {
  


    state = {
        valueOne: 0,
        valueTwo: 0,
  }
// YOU CAN SET UP EACH INPUT TO HAVE ITS OWN HANDLE CHANGE FUNCTION...
// setValueOne = e =>  {
//     this.setState({ valueOne: e.target.value})
// }

// setValueTwo = e =>  {
//     this.setState({ valueTwo: e.target.value})
// }



// ... OR SET UP A HANDLE CHANGE FUNCTION THAT CAN BE USED BY ALL
// https://medium.com/the-andela-way/handling-user-input-in-react-crud-1396e51a70bf





incrementL = () => {
  // var leftElement = document.getElementById("IncrementL");
  // var rightElement = document.getElementById("R")

  // if (leftElement){
  this.setState({valueOne: this.state.valueOne + 1})}

decrementL = () => {
this.setState({valueOne: this.state.valueOne - 1})}





incrementR = () => {
  this.setState({valueTwo: this.state.valueTwo + 1})}

decrementR = () => {
  this.setState({valueTwo: this.state.valueTwo - 1})}





// handleChange = ({ target }) => {
//   this.setState({ [ target.name ] : target.value});
// };

  render() {

      // const btnAdd = document.getElementsByClassName(".inputButton1");


      const inputOne = document.getElementById("inputOne")


        const valueOne = Number(this.state.valueOne);
        const valueTwo = Number(this.state.valueTwo);
        // const valueAnswer = ;
        // const { className } = this.props;

        // console.log(btnAdd);

        // fontawesome.library.add(faMinus, faPlus);

        

    return (
      <div className = "app">
          <div className='app__title'>
            <h1>Translate Math App</h1>
            <h2>Translate any math calculation into another language!</h2>
          </div>

          <div className="userInput">
            <form className="userInput-form" 
            //method="POST"
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
                // IT WAS IMPORTANT TO SET THE NAME HERE SO THAT THIS.STATE AND TARGET COULD BE INTERACTED WITH
                name="valueOne"
                // onChange={this.handleChange} 
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
                // onChange={this.handleChange}
                value = {valueTwo} 
                />
                <label>
                <button id="increment"
                type="button"
                className='inputButton'
                onClick={() => this.incrementR()}> <FontAwesomeIcon className="fa" icon={faPlus} /> </button>
                </label>
                </div>


                {/* <input type="submit" /> */}
            </form>
            </div>
          <div className="calculator-container">
            <Calculator valueOne={valueOne} valueTwo={valueTwo}/>
          </div>

       

          


          {/* <div className='calculation-history-container'>
            <CalculationHistory valueOne={valueOne} valueTwo={valueTwo}/>
          </div> */}
      
      </div>

    );
    }
  }

  // btnAdd.addEventListener('click', () => {
  //   console.log("selected value one increment")
  //   // input.value = parseInt(input.value) + 1;
  // })


  // const btnSubtract = document.getElementById("#decrement");
  // const inputOne = document.getElementsByClassName(".userInput-form__valueOne");


  

  // btnSubtract.addEventListener("click", () => {
  //   input.value = parseInt(input.value) - 1;

  // })


// const mapStateToProps = (state) => {
//   console.log("mapStateToProps", state);
//   return{
//     valueAnswer: state.valueAnswer
//   }
// }

// export default connect (mapStateToProps)(App);
export default App;