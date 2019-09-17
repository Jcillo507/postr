import React from "react";
import { withRouter } from "react-router-dom";

import "./postCreate.css"

function PostCreate(props) {
  return (
    <div className="post-create-ctr">
      <h2 className="create-title">Create a new post</h2>
      <form onSubmit={props.createPost}>
        <p className="create-sub"> Post your thoughts</p>

        <input
        className="create-input"
          type="text"
          name="content"
          value={props.postForm.content}
          onChange={props.handleFormChange}
        />
      
        <br />
        <button className="create-bttn">Post</button>
      </form>
    </div>
  );
}

export default withRouter(PostCreate);
