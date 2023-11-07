import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

export default Footer;
