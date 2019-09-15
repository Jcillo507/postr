import React from "react";
import { withRouter } from "react-router";

function Posts(props) {
  return (
    <div>

      <div onClick={() => props.history.push("/new/post")}>
      
        <h3>Create a new Post</h3>
      </div>
    </div>
  );
}

export default withRouter(Posts);
