import { Component } from "react";

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _onChange = e => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        this.props.inputChange(e);
    }
    render() {
        return (
            <fieldset>
                <legend>Enter temperature in {this.props.temperatureType}</legend>
                <input
                    style={{ height: "34px" }}
                    name={this.props.name}
                    onChange={this._onChange}
                    value={this.props.value}
                />
            </fieldset>
        )
    }
}

export default TemperatureInput