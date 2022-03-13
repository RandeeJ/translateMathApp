import React, { Component } from 'react';

import Calculator from './calculator';
// import CalculationHistory from './history';

class App extends Component {
  


    state = {
        valueOne: "",
        valueTwo: "",
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




handleChange = ({ target }) => {
  this.setState({ [ target.name ] : target.value});
};

  render() {


        const valueOne = Number(this.state.valueOne);
        const valueTwo = Number(this.state.valueTwo);
        // const valueAnswer = ;
        // const { className } = this.props;

    return (
      <div>
          <div className='app'>
            <h1>Translate Math App</h1>
            <h2>Translate any math calculation into another language!</h2>
          </div>

          <div className="userInput">
            <form className="userInput-form" method="POST">
                <input type="number" 
                className="userInput-form__valueOne"
                placeholder="Your First Value"
                // IT WAS IMPORTANT TO SET THE NAME HERE SO THAT THIS.STATE AND TARGET COULD BE INTERACTED WITH
                name="valueOne"
                onChange={this.handleChange} 
                value = {valueOne}
                />
                <input type="number" 
                className="userInput-form__valueTwo"
                placeholder="Your Second Value"
                name= "valueTwo"
                onChange={this.handleChange}
                value = {valueTwo} 
                />
                {/* <input type="submit" /> */}
            </form>

          <div className="calculator-container">
            <Calculator valueOne={valueOne} valueTwo={valueTwo}/>
          </div>



          


          {/* <div className='calculation-history-container'>
            <CalculationHistory valueOne={valueOne} valueTwo={valueTwo}/>
          </div> */}
      </div>
      </div>

    );
    }
  }

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps", state);
//   return{
//     valueAnswer: state.valueAnswer
//   }
// }

// export default connect (mapStateToProps)(App);
export default App;