import React from "react";
import { withRouter } from "react-router-dom";

function PostCreate(props) {
  return (
    <div>
      <h2>Create a new post</h2>
      <form onSubmit={props.newPost}>
        <p>Post's name:</p>

        <input
          type="text"
          name="name"
          value={props.postForm.name}
          onChange={props.handleFormChange}
        />

        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.postForm.photo}
          onChange={props.handleFormChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
