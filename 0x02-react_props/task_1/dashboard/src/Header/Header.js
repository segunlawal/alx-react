import React from 'react';
import './Header.css';
import holberton_logo from '../assets/holberton_logo.jpg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={holberton_logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;
