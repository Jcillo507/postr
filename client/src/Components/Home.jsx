import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Posts from "./Posts";
import Post from "./Post";
import PostCreate from "./PostCreate";
import Login from "./Login";
import Signup from "./SignUp";

import './home.css'

import {
  createPost,
  readAllPosts,
  updatePost,
  destroyPost,
  loginUser,
  registerUser,
  verifyUser
} from "../services/api-helper"

class Home extends Component {
  state = {
    posts: [],
    postForm: {
      content: ""
    },
    currentUser: null,
    authFormData: {
      name: "",
      email: "",
      password: ""
    }
  };

  createPost = async e => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const post = await createPost(this.state.postForm);
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
        content: "",
       
      }
    }));
    this.props.history.push("/")
  };

  updatePost = async (e, id) => {
    e.preventDefault()
    const { postForm } = this.state;
    await updatePost(id, postForm);
    this.setState(prevState => ({
      posts: prevState.posts.map(post =>
        post.id === postForm.id ? postForm : post
      )
    }));
    this.props.history.push("/");
  };

  deletePost = async id => {
    await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }));
    this.props.history.push("/");
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
  };

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    localStorage.setItem("userId", userData.id);
    this.setState({
      currentUser: userData
    });
    this.props.history.push("/");
  };

  handleSignup = async e => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    this.props.history.push("/");
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
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    return (
      <div className="home">
        <header className="header-ctr">
          
            <Link
              to="/"
              onClick={() =>
                this.setState({
                  postForm: {
                    content: ""
                  }
                })
              }
            >
              <h1 className="header-title">
              POSTR
              </h1>
            </Link>
          
          
            {this.state.currentUser ? (
              <>
                <p>{this.state.currentUser.name}</p>
                <button className="bttn-logout"onClick={this.handleLogout}>Logout</button>
              </>
            ) : (
              <button className="bttn-login"onClick={this.handleLoginButton}>Login / Sign Up</button>
            )}
         
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
              handleSignup={this.handleSignup}
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
              createPost={this.createPost}
            />
          )}
        />
        <Route
          path="/new/post"
          render={() => (
            <PostCreate
              handleFormChange={this.handleFormChange}
              postForm={this.state.postForm}
              createPost={this.createPost}
            />
          )}
        />
        <Route
          path="/posts/:id"
          render={props => {
            const { id } = props.match.params;
            const post = this.state.posts.find(
              post => post.id === parseInt(id)
            );
            return (
              <Post
                id={id}
                post={post}
                handleFormChange={this.handleFormChange}
                mountEditForm={this.mountEditForm}
                updatePost={this.updatePost}
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

export default withRouter(Home);
