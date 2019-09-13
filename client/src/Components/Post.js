import React from 'react'

export default class Post extends React.Component{
  handleSubmit(e) {
    e.preventDefault()
    console.log('working')
  }
render(){
  return(
    <div>
      <form>
        <label>
          <input type="text" placeholder="Post your thoughts" name="post" />
        </label>
        <label>
        <input type="submit" name="submit" onClick={this.handleSubmit} />
        </label>
      </form>
    </div>
  )
}
}