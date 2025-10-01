import CustomCheckbox from "../../components/customcheckbox/CustomCheckbox";

import { Link } from "react-router-dom";
import CustomInput from "../../components/custominput/CustomInput";
import CustomButton from "../../components/custombutton/CustomButton";
import FormGroup from "../../components/formgroup/FormGroup";
import { MdLockOutline } from 'react-icons/md';
import WithLoading from "../../components/withloading/WithLoading";
import './Signin.css'

const Signin = (props) => {
  
    const handleSubmitForm = (e) => {
        e.preventDefault()
        props.showLoading(true);
    }

    const handleOnChangeInput = (e) => {
        

    }

    const handleCheckboxChange = (checked) => {
        
    }

    return (
        <div className="signin-container">
            <div className="signin-header">
                <div className="signin-avatar">
                    <MdLockOutline size='1.36rem'/>
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
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                </div>
                <p className="copy-right"> Copyright &copy; &nbsp;
                    <Link to="/">Your Wbsite</Link>&nbsp;2022
                </p>
            </form>
        </div>
    )
}

export default WithLoading(Signin) ;
