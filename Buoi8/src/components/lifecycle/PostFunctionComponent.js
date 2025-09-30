import axios from "axios";
import React, { useEffect, useState } from "react"

const PostFunctionComponent = props => {
    const [post, setPost] = useState({
        id: '',
        title: '',
        body: '',
        userId: ''
    });
    const [number, setNumber] = useState(0);

    //didmount
    // useEffect(() => {
    //     console.log('Post function component did mount...');
    //     // getPost(props.postId)
    // }, [])

    useEffect(() => { // did update
        // console.log('Post function component did updated...');
        // getPost(props.postId)
    }, [props.postId])

    useEffect(() => { // did mount & will unmount
        // logic here ( component did mount)
        // console.log('Post function component did mount...');
        return () => {
            // console.log('Post function component will unmount...');
        }
    }, [])

    const getPost = async id => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);

        // console.log(response);
        // console.log(response.data);
        setPost(response.data);
    }
    // console.log(props.postId);
    
    console.log('Post function component rendered....');

    return (
        <div>
            <h3>Post class component</h3>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <p>userId: {post.userId}</p>
        </div>
    )
}

export default React.memo(PostFunctionComponent)