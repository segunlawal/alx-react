import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={holberton_logo} className={css(styles.AppLogo)} alt="logo" />
      <h1 className={css(styles.AppHeaderText)}>School dashboard</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid red',
  },
  AppLogo: {
    height: '20vmin',
    pointerEvents: 'none',
    paddingBlock: '10px',
  },
  AppHeaderText: {
    color: 'red',
  },
});

export default Header;
