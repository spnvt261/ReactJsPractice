import CustomInput from "../../customInput/CustomInput"
import FromGroup from "../../formgroup/FormGroup"
import "./sign.css"
const Signin = props => {
    const _inputChange = (e) => {
        // console.log(e);

        console.log(e.target.value);
        console.log(e.target.name);
    }
    return (
        <div className="signin">
            <h1>Sign in</h1>
            <FromGroup>
                <CustomInput
                    type="email"
                    label="Email Adress *"
                    name="email"
                    inputChange={_inputChange}
                />
            </FromGroup>
            <FromGroup>
                <CustomInput
                    type="password"
                    label="Password *"
                    name="password"
                    inputChange={_inputChange}
                />
            </FromGroup>

        </div>
    )
}

export default Signin