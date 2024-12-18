import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">綴り花</h1>
        <ul className="nav-links">
          <li><a href="#hero">綴り花とは</a></li>
          <li><Link to="/flower-diagnosis">手紙を書く</Link></li>
          <li><Link to="/flower-history">コラム</Link> </li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
