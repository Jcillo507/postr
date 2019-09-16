import React from "react";
import { withRouter } from "react-router-dom";

function PostCreate(props) {
  const id = localStorage.getItem('userId')
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
        <input
          type="text"
          name="user_id"
          value={props.postForm.id}
          onChange={props.handleFormChange}
        />

        <br />
        <button>Post</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
