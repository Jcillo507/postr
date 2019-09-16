import React, { Component } from "react";
import PostEdit from "./PostEdit";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { updatePost } from '../services/api-helper'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { post } = this.props;
    const id = localStorage.getItem('userId')
    return (
      <div>
        {post === undefined ? (
          <h2>Loading . . .</h2>
        ) : (
          <div>
            <h1>{post.content}</h1>
            <hr />
            {this.state.isEdit ? (
              <Route
                path={"/posts/:id"}
                render={() => (
                  <PostEdit
                    handleFormChange={this.props.handleFormChange}
                    handleSubmit={e => {
                      e.preventDefault();
                      updatePost();
                      this.setState({ isEdit: false });
                      this.props.history.push(
                        `/posts/${this.props.postForm.id}`
                      );
                    }}
                    postForm={this.props.postForm}
                  />
                )}
              />
            ) : (
              <>
                <button
                  onClick={() => {
                    this.setState({
                      isEdit: true
                    });
                    this.props.history.push(`/posts/${post.id}/edit`);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.props.deletePost(post.id);
                    this.props.history.push("/");
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Post);
