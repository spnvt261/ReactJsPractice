import { Component } from "react";
import "./DemoClassComponent.css";
class DemoClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    _onClick = () => {
        // alert('123');
        this.props.getData('Hello parent component');
    }
    render() {
        // console.log(1);

        // console.log(this.props);

        return (
            <div className="demo-class-component">
                <h1>Demo class component</h1>
                <p className="">Lastname: {this.props.x}</p>
                <button onClick={this._onClick}>Send message to parent component</button>
            </div>
        )
    }
}

export default DemoClassComponent