import CustomCheckbox from "../../_sharecomponents/customcheckbox/CustomCheckbox";

import { Link } from "react-router-dom";
import FormGroup from "../../_sharecomponents/formgroup/FromGroup";
import CustomInput from "../../_sharecomponents/custominput/CustomInput";
import CustomButton from "../../_sharecomponents/custombutton/CustomButton";

import { MdLockOutline } from 'react-icons/md'

import './Signin.css'

import { connect } from "react-redux";
import { useEffect, useState } from "react";
import userAction from "../../redux/actions/userAction";

const Signin = (props) => {
    const [userSignin, setUserSignin] = useState({
        username: '',
        password: '',
        rememberMe: false
    })
    const handleSubmitForm = (e) => {
        e.preventDefault()
        // console.log(userSignin);

        props.signin(userSignin)
    }

    const handleOnChangeInput = (e) => {

        setUserSignin({
            ...userSignin,
            [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = (checked) => {
        setUserSignin({
            ...userSignin,
            rememberMe: checked
        })
        // console.log(checked);

    }

    useEffect(() => {
        props.showLoading(props.isLoading)
    }, [props.isLoading])

    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar">
                    <MdLockOutline size='1.36rem' />
                </div>
                <h1>Sign in</h1>
            </div>
            <form className="signin-amin">
                <FormGroup>
                    <CustomInput
                        label="Username *"
                        type="text"
                        name="username"
                        value=""
                        onChangeInput={handleOnChangeInput}
                    />
                </FormGroup>

                <FormGroup>
                    <CustomInput
                        label="Password *"
                        type="password"
                        name="password"
                        value=""
                        onChangeInput={handleOnChangeInput}
                    />
                </FormGroup>

                <div className="remember-me">
                    <CustomCheckbox
                        fontSize="24px"
                        label="Remember me"
                        checkboxChange={handleCheckboxChange}
                    />
                </div>

                <div className="btn-submit">
                    <CustomButton
                        type="submit"
                        uppercase
                        width="100%"
                        onClick={handleSubmitForm}
                        color="white"
                    >
                        Sign In
                    </CustomButton>
                </div>

                <div className='group-link'>
                    <Link to="/forgot-password">Forgot password?</Link>
                    <Link to="/sign-up">Don't have an account? Sign Up</Link>
                </div>
                <p className="copy-right"> Copyright &copy; &nbsp;
                    <Link to="/">Your Wbsite</Link>&nbsp;2022
                </p>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.user.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signin: userSignin => {
            dispatch(userAction.signIn(userSignin));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
