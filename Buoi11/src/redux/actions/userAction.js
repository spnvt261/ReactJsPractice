import axios from 'axios'
import * as actionTypes from '../constants/constants'
const signUp = user => async (dispatch) => {
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
            type: actionTypes.USER_SIGNUP_SUCCESS,
            payload: response.data
        })

        window.location.replace('/signin');
    } catch (error) {
        console.log(error);
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: error.response
        })
    }


    // console.log(response);   

}

const signIn = userSignin => async (dispatch) => {
    // console.log(user);

    dispatch({
        type: actionTypes.USER_SIGNIN_REQUEST,
        payload: null
    })

    try {
        const response = await axios.post('/api/auth/signin', {
            username: userSignin.username,
            password: userSignin.password
        })
        dispatch({
            type: actionTypes.USER_SIGNIN_SUCCESS,
            payload: response.data
        })
        // console.log(response.data);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        window.location.replace('/');
    } catch (error) {
        console.log(error);
        console.log(error.response);
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: error.response
        })
    }


    // console.log(response);   

}

const getUserInfo = username => async dispatch => {
    // console.log(dispatch);

    dispatch({
        type: actionTypes.GET_USER_INFO_REQUEST,
        payload: null
    })

    try {
        const response = await axios.get('/api/accounts/' + username, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
                // 'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb252aWV0MSIsImlhdCI6MTc1OTQ3NzA3MywiZXhwIjoxNzU5NDg0MjczfQ.KoSl8SwrxiWgC--soaxeNRWnqeKBPGg37zYfA7GxA7o'
            }
        })

        dispatch({
            type: actionTypes.GET_USER_INFO_SUCCESS,
            payload: response.data
        })
        // console.log(response);

    } catch (err) {
        console.log(err);
        console.log(err.response);
        dispatch({
            type: actionTypes.GET_USER_INFO_FAIL,
            payload: err.response
        })
    }

}
const updateUserInfo = (user, file) => async dispatch => {
    // console.log(dispatch);

    dispatch({
        type: actionTypes.UPDATE_USER_INFO_REQUEST,
        payload: null
    })

    try {
        if (file) {
            var formData = new FormData();
            formData.append('image', file, file.name);
            const responseUpload = await axios({
                method: 'POST',
                url: '/api/files/image',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: formData
            });

            const response = await axios({
                method: 'PUT',
                url: 'api/accounts/' + user.id,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    firstName: user.firstName,
                    username: user.username,
                    lastName: user.lastName,
                    role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                    email: user.email,
                    password: user.password,
                    status: 'ACTIVE',
                    avataUrl: responseUpload ? responseUpload.data : ''

                }
            })
            dispatch({
                type: actionTypes.UPDATE_USER_INFO_SUCCESS,
                payload: {
                    ...user,
                    firstName: user.firstName,
                    username: user.username,
                    lastName: user.lastName,
                    role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                    email: user.email,
                    password: user.password,
                    status: 'ACTIVE',
                    avataUrl: responseUpload ? responseUpload.data : ''
                }
            })

            localStorage.setItem('avataUrl', responseUpload.data);
        } else {
            const response = await axios({
                method: 'PUT',
                url: 'api/accounts/' + user.id,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: localStorage.getItem('role').replace('[', '').replace(']', ''),
                    email: user.email,
                    password: user.password,
                    status: 'ACTIVE',
                    avataUrl: localStorage.getItem('avataUrl') ? localStorage.getItem('avataUrl') : ''

                }
            })
            dispatch({
                type: actionTypes.UPDATE_USER_INFO_SUCCESS,
                payload: response.data
            })
        }



    } catch (err) {
        console.log(err);
        console.log(err.response);
        dispatch({
            type: actionTypes.UPDATE_USER_INFO_FAIL,
            payload: err.response
        })
    }

}

const userAction = {
    signUp,
    signIn,
    getUserInfo,
    updateUserInfo
}

export default userAction;