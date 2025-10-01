// const DemoFragment = (props) => {

import { Component } from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import './DemoFragment.css';
// }
class DemoFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorIsRed: false,
            x: 100,
            y: 200
        }
    }

    _onClick = () => {
        //alert('123abc');
        this.setState({
            colorIsRed: !this.state.colorIsRed
        })
    }

    render() {
        return (
            <>
                <h1>Demo fragment</h1>
                <p>using fragment</p>
                <h2>{this.state.colorIsRed.toString()}</h2>
                <button onClick={this._onClick}>Change table border color</button>
                <table 
                    className={
                        this.state.colorIsRed ? "table-fragment border-red" : "table-fragment"
                    }
                >
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Userame</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>Nguyen Quang Hai</td>
                            <td>quanghai</td>
                            <td>quanghai@gmail.com</td> */}
                            <Column1 />
                        </tr>
                        <tr>
                            {/* <td>Nguyen Tuan Anh</td>
                            <td>tuananh</td>
                            <td>tuananh@gmail.com</td> */}
                            <Column1 />
                            <Column2 />
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default DemoFragment;