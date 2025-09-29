import axios from "axios";
const { Component } = require("react");


class PostClassComponent extends Component {

    // Mounting: constructor; render; didmount
    constructor(props) {
        super(props)
        console.log("Post class component constructor running...");

        this.state = {
            post: {
                id: '',
                title: '',
                body: '',
                userId: '',
                titleUpperCase: ''
            }
        }
    }

    componentWillMount() { // không dùng nữa
        console.log("Post class component will mount");
    }

    componentDidMount() {
        console.log("Post class component did mount");
        this.getPost(this.props.postId)
    }

    getPost = async id => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        // console.log(response.data);
        this.setState({
            // post: response.data
            post: {
                ...response.data,
                titleUpperCase: response.data.title.toUpperCase(),
            }
        })
        // console.log(this.state.post);

    }
    //====================================
    // Updateing: shouldComponentUpdate, componentWillUpdate, componentDidUpdate
    shouldComponentUpdate =(nextProps, nextState)=> {
        console.log('%cnext prop','color:red');
        console.log(nextProps);
        console.log('%ccurrent prop','color:green');
        console.log(this.props);
        if(nextProps.postId != this.props.postId){
            return true;    
        }
        return false;
    }

    componentDidUpdate =(prevProps)=>{
        if(prevProps.postId != this.props.postId){
            this.getPost(this.props.postId)
        }
    }
    //===================================
    //unmounting
    componentWillUnmount = ()=>{
        console.log('postClass component will unmount');
        
    }

    render() {
        // console.log('postId: ' + this.props.postId);

        console.log("Post class component render");
        return (
            <div>
                <h3>PostClassComponent</h3>
                <p>id: {this.state.post.id}</p>
                <p>title: {this.state.post.titleUpperCase}</p>
                <p>body: {this.state.post.body}</p>
                <p>userId: {this.state.post.userId}</p>
            </div>
        )
    }
}

export default PostClassComponent;