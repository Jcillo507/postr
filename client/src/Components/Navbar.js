import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav >
      <Link className="navbar-brand" to="/">
        Q&App
      </Link>
    </nav>
  );
}

export default NavBar;