

export default function OperationReducer() {


// const OPERATION_ADDITION = "OPERATION_ADDITION";

// function addition() {
//     return {
//         type: OPERATION_ADDITION,
//         info: "some information about what is happening"
//     }
// }

const initialState = {
    valueOne: this.props.valueOne,
    valueTwo: this.props.valueTwo,
    valueAnswer: ""
}

const operationReducer = (state = initialState, action) => {
    // switch(action.type) {
        // case "AdditionAnswer": 
        if (action.type === "ADDIION_ANSWER"){
        console.log("addiion")
        return {
            ...state,
            valueAnswer: state.valueOne + state.valueTwo}
        }
        if (action.type === "SUBTRACTION_ANSWER"){
            console.log("subtraction")
            return {
                ...state,
                valueAnswer: state.valueOne - state.valueTwo}
            }

    }
}


