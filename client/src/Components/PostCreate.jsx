import React from "react";
import { withRouter } from "react-router-dom";

function PostCreate(props) {
  return (
    <div>
      <h2>Create a new post</h2>
      <form onSubmit={props.createPost}>
        <p>Post your thoughts</p>

        <input
          type="text"
          name="content"
          value={props.postForm.name}
          onChange={props.handleFormChange}
        />

    
        <br />
        <button 
        // onClick={()=>{console.log(userData)}}
        >Post</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
