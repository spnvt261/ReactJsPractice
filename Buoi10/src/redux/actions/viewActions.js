import * as actionTypes from "../constants/constants"

const toggleSidebar = () => {
    return {
        type: actionTypes.TOGGLE_SIDEBAR,
        payload: null
    }
}


const viewActions = {
    toggleSidebar
}

export default viewActions;