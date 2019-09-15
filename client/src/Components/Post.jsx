import React, { Component } from "react";
import PostEdit from "./PostEdit";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

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
    return (
      <div>
        {post === undefined ? (
          <h2>Loading . . .</h2>
        ) : (
          <div>
            <img alt={post.name} src={post.photo} />
            <h1>{post.name}</h1>
            <p>{post.description}</p>
            <a href={post.link}>Connect</a>
            <hr />
            {this.state.isEdit ? (
              <Route
                path={"/posts/:id/edit"}
                render={() => (
                  <PostEdit
                    handleFormChange={this.props.handleFormChange}
                    handleSubmit={e => {
                      e.preventDefault();
                      this.props.editPost();
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
