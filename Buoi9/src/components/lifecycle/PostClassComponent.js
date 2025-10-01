import { Component } from 'react';
import axios from 'axios';

class PostClassComponent extends Component {

    /**
     * 
     * Mounting: constructor; render; didmount
     */
    constructor(props) {
        super(props);
        console.log("PostClassComponent's constructor running...");

        this.state = {
            // post: {
            //     id: '',
            //     title: '',
            //     body: '',
            //     userId: ''
            // }
            // post: {
            //     id: '',
            //     title: '',
            // },
            post: {
                id: '',
                title: '',
                body: '',
                userId: '',
                titleUpperCase: ''
            }
        }
    }

    componentWillMount() {//không dùng nữa
        console.log('PostClassComponent will mount...');
    }

    //Chạy một lần duy nhất sau khi render và hiện thị xong trên cây DOM
    componentDidMount() {// Call api here
        console.log('PostClassComponent did mount...');
        this.getPost(this.props.postId);
    }

    getPost = async id => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        console.log(response);
        console.log(response.data);

        this.setState({
            //post: response.data

            // post: {
            //     id: response.data.id,
            //     title: response.data.title
            // }

            post: {
                ...response.data,
                titleUpperCase: response.data.title.toUpperCase()
            }
        })
    }

    /**
     * 
     * Updateting: shouldComponentUpdate; componentWillReceiveProps; componentWillUpdate; componentDidUpdate
     */

    shouldComponentUpdate = (nextProps, nextState) => {

        console.log('%cNext Props: ', 'color: red');
        console.log(nextProps);
        console.log('%cCurrent Props: ', 'color: green');
        console.log(this.props);

        if (nextProps.postId != this.props.postId) return true;
    
        return false;
        //return true (Default)
    }

    componentDidUpdate = prevProps => {
        if (prevProps.postId != this.props.postId) {
            this.getPost(this.props.postId);
        }
    }

    /**
     * 
     * Unmountting: componentWillUnmount
     */
    componentWillUnmount() {//Clear timeout; interval; cancel api request
        console.log('PostClassComponent will unmount...');
    }

    render() {
        //console.log('post id: ' + this.props.postId);

        console.log('PostClassComponent rendered...');

        return(
            <div>
                <h3>Post class component</h3>
                <p>Id: {this.state.post.id}</p>
                <p>Title: {this.state.post.titleUpperCase}</p>
                <p>Body: {this.state.post.body}</p>
                <p>userId: {this.state.post.userId}</p>
            </div>
        )
    }
}

export default PostClassComponent;