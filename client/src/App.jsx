import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";



import Posts from "./components/Posts";
import Post from "./components/Post";
import PostCreate from "./components/PostCreate";

import Login from "./components/Login";
import Signup from "./components/Signup";

import {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost,
  loginUser,
  registerUser,
  verifyUser
} from "./services/api-helper";

import "./App.css";

class App extends Component {
  state = {
    posts: [],
    postForm: {
      name: "",
      description: "",

    },
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  };

  getPosts = async () => {
    const data = await readAllPosts();
    this.setState({
      posts: data.posts
    });
  };

  newPost = async e => {
    e.preventDefault();
    const post = await createPost(this.state.postForm);
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
        name: "",
        description: "",
        link: "",
        photo: ""
      }
    }));
  };

  editPost = async () => {
    const { postForm } = this.state;
    await updatePost(postForm.id, postForm);
    this.setState(prevState => ({
      posts: prevState.posts.map(post =>
        post.id === postForm.id ? postForm : post
      )
    }));
  };

  deletePost = async id => {
    await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }));
  };

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postForm: {
        ...prevState.postForm,
        [name]: value
      }
    }));
    
  };

  mountEditForm = async id => {
    const posts = await readAllPosts();
    const post = posts.find(el => el.id === parseInt(id));
    this.setState({
      posts,
      postForm: post
    });
  };

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login");
    console.log("working 104");
  };

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    });
    console.log("working 111");
  };

  handleSignup = async e => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    console.log('working 117')
  };

  handleLogout = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    });
  };

  authHandleChange = async e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  };

  async componentDidMount() {
    this.getPosts();
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link
              to="/"
              onClick={() =>
                this.setState({
                  postForm: {
                    name: "",
                    description: "",
                    link: "",
                    photo: ""
                  }
                })
              }
            >
              Postr
            </Link>
          </h1>
          <div>
            {this.state.currentUser ? (
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </>
            ) : (
              <button onClick={this.handleLoginButton}>Login / Sign Up</button>
            )}
          </div>
        </header>
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <Signup
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Posts
              posts={this.state.posts}
              postForm={this.state.postForm}
              handleFormChange={this.handleFormChange}
              newPost={this.newPost}
            />
          )}
        />
        <Route
          path="/new/post"
          render={() => (
            <PostCreate
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              newpost={this.newpost}
            />
          )}
        />
        <Route
          path="/posts/:id"
          render={props => {
            const { id } = props.match.params;
            const post = this.state.posts.find(el => el.id === parseInt(id));
            return (
              <Post
                id={id}
                post={post}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                edi={this.edi}
                postForm={this.state.postForm}
                deletePost={this.deletePost}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);

