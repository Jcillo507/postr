import React from 'react'

export default class Signup extends React.Component {

 handleSubmit(e) {
    e.preventDefault()
    console.log('working')
  } 
  render() {
    return (
      <div className='signup-ctr'>
        <form>
          <label>
            Name:
      <input type="text" name="name" />
          </label>
          <label>
            Email:
      <input type="text" name="email" />
          </label>
          <label>
            Password:
      <input type="password" name="password" />
          </label>
          <label>
            <input type="submit" name="submit" onClick={this.handleSubmit} />
          </label>
        </form>
      </div>
    )
  }
}