import * as actiontypes from '../constants/constants'
const initState ={
    isLoading: false,
    userInfo:{
        id:'',
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
    },
    userSignin:{
        token:'',
        username:'',
        role:'',
    }
}

const userReducer = (state = initState, action)=>{
    switch(action.type){
        //user signup
        case actiontypes.USER_SIGNUP_REQUEST:
            // console.log('loading true');
            
            return{
                ...state,
                isLoading:true
            }
        case actiontypes.USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isLoading:false
            }
        case actiontypes.USER_SIGNUP_FAIL:
            // console.log('loading fail');
            return{
                ...state,
                isLoading:false
            }
        //user signin
        case actiontypes.USER_SIGNIN_REQUEST:
            // console.log('loading true');
            
            return{
                ...state,
                isLoading:true
            }
        case actiontypes.USER_SIGNIN_SUCCESS:
            return{
                ...state,
                isLoading:false
            }
        case actiontypes.USER_SIGNIN_FAIL:
            // console.log('loading fail');
            return{
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}

export default userReducer;