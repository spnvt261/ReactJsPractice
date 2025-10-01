import { combineReducers } from "redux"
import countReducer from "./countreducer/CountReducer"
import viewReducer from "./viewReducer/viewReducer";

const rustReducer = combineReducers({
    // countReducer
    counter: countReducer,
    view: viewReducer
})

export default rustReducer;