import styled from "styled-components";
import CustomInput from "../../../_sharecomponents/custominput/CustomInput";
import FormGroup from "../../../_sharecomponents/formgroup/FromGroup";
import CustomButton from "../../../_sharecomponents/custombutton/CustomButton";

const PasswordChanging = (props) => {

    return (
        <div className={props.className}>
            <form 
                className="content" 
            >
                <h3>Change password</h3>
                <FormGroup>
                    <CustomInput 
                        label='New password *'
                        type='password'
                        name='password'
                    />
                </FormGroup>
                <FormGroup>
                    <CustomButton
                        type="submit"
                        color="#ffffff"
                        width="100%"
                        uppercase
                    >
                        Submit
                    </CustomButton>
                </FormGroup>
                <FormGroup>
                    <p style={{color: 'blue'}}>{props.messageChangePasswordSuccess}</p>
                    <p>{props.errorMessageChangePassword}</p>
                </FormGroup>
            </form>
        </div>
    )

}

const PasswordChangingStyled = styled(PasswordChanging) `
    height: calc(100vh - 108px);
    position: relative;
    width: 400px;
    margin: auto;

    .content {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h3 {
        text-align: center;
    }

    .content .form-group p {
        color:  red;
        font-size: .8rem;
        position: absolute;
        top: 100%;
    }
`

export default PasswordChangingStyled;
