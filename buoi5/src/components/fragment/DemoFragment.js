import { Component } from "react"
import Column1 from "./Column1"
import Column2 from "./Column2"
import "./DemoFragment.css"

class DemoFragment extends Component {
    constructor(props){
        super(props);
        this.state ={
            colorIsRed: false
        }
    }
    _onClick = e => {
        // alert('123')
        this.setState({
            colorIsRed: !this.state.colorIsRed
        })
    }
    render() {
        return (
            <>
                <h1>Demo DemoFragment</h1>
                <p>using fragment</p>
                <h3>{this.state.colorIsRed.toString()}</h3>
                <button onClick={this._onClick}>Change table border color</button>
                <table className={this.state.colorIsRed?"border-red":""}>
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>Nguyễn Quang Hải</td>
                        <td>quanghai</td>
                        <td>quanghai@gmail.com</td> */}
                            <Column1 />
                        </tr>
                        <tr>
                            {/* <td>Nguyễn Tuan Anh</td>
                        <td>tuananh</td>
                        <td>gmail</td> */}
                            <Column1 />
                            <Column2 />
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

}

export default DemoFragment