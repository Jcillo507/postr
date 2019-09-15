import React from "react";
import { withRouter } from "react-router";

function Posts(props) {
  return (
    <div>
      {/* {props.posts.map(post => (
        <div
          key={post.id}
          className="post-card"
          onClick={() => {
            props.history.push(`/posts/${post.id}`);
            window.scrollTo(0, 0);
          }}
        >
          <div className="image-cropper">
            <img alt={post.name} src={post.photo} />
          </div>
          <h3>
            <p>{post.name}</p>
          </h3>
        </div>
      ))} */}
      <div
        
        onClick={() => props.history.push("/new/post")}
      >
        <img
          alt="Create a new instructor"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign"
        />
        <h3>Create a new instructor</h3>
      </div>
    </div>
  );
}

export default withRouter(Posts);
