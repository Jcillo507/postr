import React from "react";
import { withRouter } from "react-router-dom";

function PostCreate(props) {
  const id = localStorage.getItem("userId");
  console.log(props)
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
          type="hidden"
          name="user_id"
          value={id}
          onChange={props.handleFormChange}
        />

        <br />
        <button>Post</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
