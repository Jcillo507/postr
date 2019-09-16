import React from 'react'
import { Route, Link } from "react-router-dom";
import axios from 'axios'

class Posts extends React.Component{
  constructor(props){
    super(props);
  this.state= {
    posts: [],
  }
}
  componentDidMount(){
    axios.get('http://localhost:3000/posts')
    .then(response=>{
      this.setState({
        posts: response.data
      })
    })
  }
  render(props){
    console.log(this.state.posts, 'post')
    return (
      <div>
        <Link
          to="/new/post"
          onClick={() =>
            this.setState({
              postForm: {
                content: ""
              }
            })
          }
        >
          Create a new Post
        </Link>
      </div>
    );
  }
}

export default Posts
