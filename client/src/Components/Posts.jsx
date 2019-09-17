import React from "react";
import { Link } from "react-router-dom";
import { readAllPosts } from "../services/api-helper";
import './posts.css'


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
      <div className="posts-list-ctr"> 
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
         <p className="post-link"> Post your thoughts!</p>
        </Link>
        

          {this.state.posts.map(post => (
            <Link to={`posts/${post.id}`}>
              <div className="post-ctr">
            <h2 className="post-content">{post.content}</h2>
            </div>
            </Link>
            
          ))}
        
      </div>
    );
  }
}

export default Posts;
