import { combineReducers } from 'redux';
import OperationReducer from "./operationReducers/additionReducer";

const allReducers = combineReducers({
  // state: (state = {}) => state;

  valueAnswer: OperationReducer,
  // subtractionAnswer: SubtractionReducer,
  // multiplicationAnswer: MultiplicationReducer

});

// export default allReducers;