// import React, { Component } from "react";

// class Numbers extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//           valueOne: {valueOne},
//           valueTwo: {valueTwo}
//       }
  
//       // this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     // handleChange(event) {
//     //   this.setState(
//     //       valueOne = event.target.value,
//     //       valueTwo = event.target.value
//     //   );
//     // }
  
//     handleSubmit(event) {
//       const valueOne = event.target.value;
//       const valueTwo = event.target.value;
//         console.log(this.state.valueOne, this.state.valueTwo, event.target.value);

//         event.preventDefault();

//         //     return(
//         //     <div className="display">
//         //         {this.state.valueOne} + {this.state.valueTwo}
//         //     </div>
//         // )
// }
  
//     render() {
//       const {}
//       return (
//         <form 
//         onSubmit={this.handleSubmit}
//         >

//           {/* <label> */}
//             <input type="number"
//             className="number__valueOne"
//             placeholder = "Value One"
//             // onChange={this.handleChange}
//             />
//             <input type="number"
//             className="number__valueTwo"
//             placeholder = "Value Two"
//             // onChange={this.handleChange}
//             />

//           {/* </label> */}
//           <input type="submit" value="Submit" />

//             {/* <HandleSubmit /> */}

//           {/* <input type="submit" value="Subtraction" /> */}
//         </form>
//       );
//     }
//   }

// export default Numbers;