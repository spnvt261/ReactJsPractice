import axios from 'axios'
import * as actionTypes from '../constants/constants'
const signUp = user => async(dispatch) => {
    // console.log(user);

    dispatch({
        type: actionTypes.USER_SIGNUP_REQUEST,
        payload: null
    })

    try {
        const response = await axios.post('/api/auth/signup', {
            ...user
        })
        dispatch({
            type:actionTypes.USER_SIGNUP_SUCCESS,
            payload:response.data
        })

        window.location.replace('/signin');
    } catch(error) {
        console.log(error);
        dispatch({
            type:actionTypes.USER_SIGNUP_FAIL,
            payload:error.response
        })
    }


    // console.log(response);   

}

const signIn = userSignin => async(dispatch) => {
    // console.log(user);

    dispatch({
        type: actionTypes.USER_SIGNIN_REQUEST,
        payload: null
    })

    try {
        const response = await axios.post('/api/auth/signin', {
            username:userSignin.username,
            password:userSignin.password
        })
        dispatch({
            type:actionTypes.USER_SIGNIN_SUCCESS,
            payload:response.data
        })
        // console.log(response.data);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        window.location.replace('/');
    } catch(error) {
        console.log(error);
        console.log(error.response);
        dispatch({
            type:actionTypes.USER_SIGNIN_FAIL,
            payload:error.response
        })
    }


    // console.log(response);   

}

const userAction = {
    signUp,
    signIn
}

export default userAction;