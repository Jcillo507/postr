import React from 'react'
import axios from 'axios'

class Posts extends React.Component{
  state= {
    posts: [],
  }
  componentDidMount(){
    axios.get('http://localhost:3000/posts')
    .then(response=>{
      this.setState({
        posts: response.data
      })
      console.log(response, 'response')
    })
  }
  render(){
    console.log(this.state.posts, 'post')
    return(
      <div>
      <p>help me</p>
      
      </div>
    )
  }
}

export default Posts