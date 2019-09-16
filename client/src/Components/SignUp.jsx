import React from "react";
import { withRouter } from "react-router-dom";

// This component handles our register form
const Signup = props => {
  return (
    <div>
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleSignup}>
        <p>Username:</p>
        <input
          name="name"
          type="text"
          value={props.formData.name}
          onChange={props.handleChange}
        />
        <p>Email:</p>
        <input
          name="email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <hr />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
