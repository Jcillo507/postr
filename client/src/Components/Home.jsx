import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

import Posts from "./Posts";
import Post from "./Post";
import PostCreate from "./PostCreate";

import Login from "./Login";
import Signup from "./SignUp"

import {
  createPost,
  readAllPosts,
  loginUser,
  registerUser,
  verifyUser
} from "../services/api-helper";



class Home extends Component {
  state = {
    posts: [],
    postForm: {
      content: "",
      user_id:""
    },
    currentUser: null,
    authFormData: {
      name: "",
      email: "",
      password: ""
    }
  };

  getPosts = async () => {
    const data = await readAllPosts();
    console.log(data)
    this.setState({
      posts: data.posts
    });
  };

  createPost = async e => {
    e.preventDefault();
    const id = localStorage.getItem('userId')
    const post = await createPost(this.state.postForm);
    console.log (post)
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
        content: "",
        user_id: 'id'
      }
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
    this.getPosts();
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    const id = localStorage.getItem("userId");
    console.log(id, );
    return (
      <div className="home-ctr">
        <header className="header-ctr">
          <h1 className="header-title">
            <Link
              to="/"
              onClick={() =>
                this.setState({
                  postForm: {
                    content: "",
                    user_id: id
                
                  }
                })
              }
            >
              Postr
            </Link>
          </h1>
          <div className="header-log-button">
            {this.state.currentUser ? (
              <>
                <p>{this.state.currentUser.name}</p>
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
        
      </div>
    );
  }
}

export default withRouter(Home);
