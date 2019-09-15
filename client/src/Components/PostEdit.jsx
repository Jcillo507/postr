import React from "react";
import { withRouter } from "react-router-dom";

function PostEdit(props) {
  return (
    <div>
      <h3>Edit post</h3>
      <form onSubmit={props.handleSubmit}>
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

export default withRouter(PostEdit);
