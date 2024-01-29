import React, { useContext } from 'react';
import holberton_logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <header className={css(styles.AppHeader)}>
        <img src={holberton_logo} className={css(styles.AppLogo)} alt="logo" />
        <h1 className={css(styles.AppHeaderText)}>School dashboard</h1>
      </header>
      <section id="logoutSection">
        {user.isLoggedIn && (
          <div className={css(styles.HeaderWelcome)}>
            <p>welcome {user.email}</p>
            <button type="button" onClick={logOut}>
              logout
            </button>
          </div>
        )}
      </section>
    </>
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
  HeaderWelcome: {
    paddingTop: '20px',
    display: 'flex',
    gap: '10px',
  },
});

export default Header;
