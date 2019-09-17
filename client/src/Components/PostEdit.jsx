import React from "react";
import { withRouter } from "react-router-dom";
import "./postEdit.css"

function PostEdit(props) {
  return (
    <div className="edit-ctr">
      <h3 className="edit-title">Edit post</h3>
      <form onSubmit={(e)=>props.updatePost(e,props.postForm.id)}>

        <input 
        className="edit-input"
          type="text"
          name="content"
          value={props.postForm.name}
          onChange={props.handleFormChange}
        />
        <br />
        <button className="edit-bttn"type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(PostEdit);
