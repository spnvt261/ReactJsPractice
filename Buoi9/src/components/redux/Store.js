import {createStore} from "redux";
import rustReducer from "./reducers";

const store = createStore(rustReducer);

export default store;