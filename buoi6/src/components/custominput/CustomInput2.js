import { Component } from "react";

class CustomInput2 extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div className="custom-input">
                <label>Password</label>
                <input placeholder="Password"/>
            </div>
        )
    }
}

export default CustomInput2;