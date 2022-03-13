// import React, { Component } from "react";

// export default class Calculation2 extends Component {
//   // constructor(props){
//   //     super(props) {

//   //         this.addition=this.addition.bind(this);
//   //     }
//   // //     // this.onSubmit = this.onSubmit.bind(this);

//   // //     this.state = {
//   // //         valueOne: "",
//   // //         valueTwo: "",
//   // //         // ADDITIONAL FIELDS CREATED input from "addValueButton"

//   // //     }};

//   constructor(props) {
//     super();
//     this.state = {
//       show: false,
//     };


//   // addValue(){
//   //     // CREATES A NEW INPUT AND ADDS VALUE TO ARRAY
//   // }

//   render() {
//     const valueOne = 2;
//     const valueTwo = 6;
//     const additionOutput = valueOne + valueTwo;

//     function addition() {
//       const viewCalculation =  document.getElementsByClassName("view-calculation");

//         // document.querySelector("body > div > div > div.calculation-container > div > h1")
//     //   viewCalculation.display === "none" ? console.log("not showing") : console.log("showing");

//       console.log(viewCalculation);
      
//     //   function Form() {
//         function handleSubmit(e) {
//           e.preventDefault();
//           console.log('You clicked submit.');
//         }
      
//         return (
//           <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//           </form>
//         );
//       }

      
//     //   this.setState({
//     //     show: true,
//     //   });
//     //   if (
//         // viewCalculation.style.display = "block";
      
        
//         //viewCalculation.style.display = "none";
      

//       return (
//         console.log("working", additionOutput), valueOne + valueTwo,
//         console.log(viewCalculation))
//         // <div>
//         //     {valueOne} + {valueTwo}
//         //  </div>
//   }
      
//       return(
//         /* <p className="testinput">
//                     Hello
//                     </p> */
//     <div>
//         <div className="select-operation-container">
//           <button
//             className="additionBtn"
//             onClick={() => addition()}
//             // , console.log("working")
//           >
//             Addition
//           </button>

//           <button
//             className="multiplicationBtn"
//             // onClick={multiplication()}
//           >
//             Multiplication
//           </button>

//           <button
//             className="subtractionBtn"
//             // onClick={subtraction()}
//           >
//             Subtraction
//           </button>

//           {/* <button className="divisionBtn"
//             // onClick={division()}
//             >
//             Division
//             </button> 
//           HOW TO WORK WITH DIVIDING MORE THAN 2 NUMBERS
//                         IS THERE A WAY TO LIMIT HOW MANY INPUTS ARE AVAILABLE WHEN THEY SELECT DIVISION
//                         CONSIDER HAVING THEM CHOOSE AN OPERATION FIRST AND THEN THAT DETERMINES HOW MANY
//                         INPUTS ARE ACCESSIBLE */}
//         </div>

//         <div className="value-input-container">
//           <input className="valueOne" type="number" placeholder="value one" />

//           <input className="valueTwo" type="number" placeholder="value one" />

//           <button
//             className="addValueButton"
//             // onClick={addValue()}
//           >
//             Add another value
//           </button>
//         </div>

//         <h1 className="view-calculation"
//         // style={{ display: this.state.show ? "block" : "none" }}
//         >
//           {" "}
//           {valueOne} + {valueTwo} = {additionOutput}
//         </h1>
// </div>

//             )
//     }
// }
