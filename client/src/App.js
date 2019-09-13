import React from 'react';
import Header from './Components/Header'
import Posts from './Components/Posts'
import Signup from './Components/SignUp'
import Post from './Components/Post'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Signup />
      <Posts />
      <Post />
    </div>
  );
}

export default App;
