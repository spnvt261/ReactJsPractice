import actionTypes from "../../constants/constants";

const initState= {
    count:0,
    x:100,
    y:200
}

const countReducer = (state = initState, action) =>{
    // console.log(action);
    
    switch(action.type){
        case actionTypes.INCREAMENT_COUNT:
            return {
                ...state,
                count: state.count +1,
            }
        default:
            return state;
    }
}

export default countReducer;