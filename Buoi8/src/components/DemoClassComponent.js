import { Component } from "react";
import './DemoClassComponent.css';
class DemoClassComponent extends Component {
    constructor(props) {
        super(props);
    }

    _onClick = () => {
        //alert('123abc');
        this.props.getData('Hello parent component');
    }

    render() {
        console.log('Props received from parent: ')
        console.log(this.props)

        return (
            <div className="demo-class-component">
                <h1>Demo class component</h1>
                <p className="">Last Name: {this.props.x}</p>
                <p className="">y: {this.props.y}</p>
                <button onClick={this._onClick}>Send Message To Parent Component</button>
            </div>
        )
    }
}

export default DemoClassComponent;