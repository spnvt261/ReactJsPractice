import * as actionTypes from "../constants/constants";

const initState = {
    sidebarIsOpen: true,
}
const viewReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
            }
        
        default: 
            return state;
    }
}

export default viewReducer;