import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

export default Footer;
