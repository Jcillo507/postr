import React from "react";
import { withRouter } from "react-router-dom";

function PostCreate(props) {
  console.log(props)
  return (
    <div>
      <h2>Create a new post</h2>
      <form onSubmit={props.createPost}>
        <p>Post's name:</p>

        <input
          type="text"
          name="content"
          value={props.postForm.name}
          onChange={props.handleFormChange}
        />
    
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
