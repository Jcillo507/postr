import React from "react";
import { withRouter } from "react-router-dom";

function PostEdit(props) {
  console.log(props)
  return (
    <div>
      <h3>Edit post</h3>
      <form onSubmit={(e)=>props.updatePost(e,props.postForm.id)}>
        <p>Post</p>

        <input
          type="text"
          name="content"
          value={props.postForm.name}
          onChange={props.handleFormChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(PostEdit);
