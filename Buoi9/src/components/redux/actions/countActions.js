import actionTypes from "../constants/constants"

const incrementCount = () => {
    return {
        type: actionTypes.INCREAMENT_COUNT,
        payload: null
    }
}

const countActions = {
    incrementCount,
}

export default countActions