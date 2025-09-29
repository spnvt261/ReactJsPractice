import CustomInput from "../../components/custominput/CustomInput"
import FormGroup from "../../components/formgroup/FormGroup"
import './Signin.css'
const Signin = props => {

    return (
        <div className="signin">
            <h1>Sign In</h1>
            <FormGroup 
                // width="300px"
            >
                <CustomInput 
                    type="email"
                    name="email"
                    label="Email Address *"
                />
            </FormGroup>
            <FormGroup 
                // width="300px"
            >
                <CustomInput 
                    type="password"
                    name="password"
                    label="Password *"
                />
            </FormGroup>
        </div>
    )
}

export default Signin