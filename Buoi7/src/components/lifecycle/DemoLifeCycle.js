import { Component } from 'react';
import PostClassComponent from './PostClassComponent';

class DemoLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: 1,
            flagShowChildComponent: true
        }
    }

    _randomPostId = () => {
        let id = Math.floor(Math.random() * 3) + 1;
        this.setState({
            postId: id
        })
    }


    _toggleChildComponent = () => {
        this.setState({
            flagShowChildComponent: !this.state.flagShowChildComponent
        })
    }

    render() {
        return(
            <div>
                <h2>Demo life cycle</h2>
                <button onClick={this._randomPostId}>Random Post Id</button>
                <button onClick={this._toggleChildComponent}>Toggle Child Component</button>
                {
                    this.state.flagShowChildComponent && <PostClassComponent postId={this.state.postId}/>
                }
            </div>
        )
    }
}

export default DemoLifeCycle;