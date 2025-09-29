import { Component } from "react";
import "./CustomInput.css"

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputFocus:false
        }
    }
    _onChange = (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.name);
        this.props.inputChange(e);
    }
    _onFocus = e=>{
        this.setState({
            inputFocus: true
        })
    }
    _onBlur = e=>{
        this.setState({
            inputFocus: false
        })
    }
    render() {
        return (
            <div className="formcontrol-input">
                <label className={this.state.inputFocus?"active":""}>{this.props.label} </label>
                <div className="input-item">
                    <input
                        className={this.state.inputFocus?"active":""}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this._onChange}
                        type={this.props.type}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                    />
                    <fieldset
                        className={this.state.inputFocus?"active":""}
                    >
                        <legend>
                            <span>
                                {this.props.label}
                            </span>
                        </legend>
                    </fieldset>
                </div>

            </div>
        )
    }
}

export default CustomInput;