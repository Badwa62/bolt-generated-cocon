import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
