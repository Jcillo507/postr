import React from 'react'
import axios from 'axios'

class Posts extends React.Component{
  state= {
    posts: [],
  }
  componentDidMount(){
    axios.get('http://localhost:3000/users')
    .then(response=>{
      this.setState({
        posts: response.data
      })
    })
  }
  render(){
    console.log(this.state.posts[0], 'post')
    return(
      <div>
      <p>help me</p>
      </div>
    )
  }
}

export default Posts