import React from "react";
import { Route, Link } from "react-router-dom";
import { readAllPosts } from "../services/api-helper";
import Post from '../components/Post'
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

getPosts = async () =>{
  await readAllPosts().then(response =>{
    this.setState({
      posts: response
  })
  });
}
  componentDidMount() {
    this.getPosts()
  }
  render() {
    return (
      <div> 
        <Link
          to="/new/post" 
          onClick={() =>
            this.setState({
              postForm: {
                content: "", 
                userId: "",
              }
            })
          }
        >
          Create a new Post
        </Link>
        <div>

          {this.state.posts.map(post => (
            <Link to={`posts/${post.id}`}>
            <h2>{post.content}</h2>
            </Link>
            
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
