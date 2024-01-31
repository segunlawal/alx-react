import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const validateInput = () => {
    setEnableSubmit(email && password);
  };
  useEffect(() => {
    validateInput();
  }, [email, password]);

  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>

      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.AppCredentials)}>
          <div>
            <label htmlFor="email" className={css(styles.label)}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={css(styles.input)}
              value={email}
              onChange={handleChangeEmail}
              onBlur={validateInput}
            />
          </div>
          <div>
            <label htmlFor="password" className={css(styles.label)}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={css(styles.input)}
              value={password}
              onChange={handleChangePassword}
              onBlur={validateInput}
            />
          </div>
          <button
            type="submit"
            className={css(styles.submitButton)}
            disabled={!enableSubmit}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func,
};
Login.defaultProps = {
  logIn: () => {},
};

const styles = StyleSheet.create({
  AppBody: {
    marginTop: '20px',
    marginLeft: '30px',
  },

  AppCredentials: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  input: {
    marginLeft: '10px',
  },

  label: {
    paddingRight: '2px',
  },

  submitButton: {
    borderRadius: '5px',
    outline: '0',
    background: 'white',
    padding: '2px 8px',
    border: '1px solid gray',
    width: '100px',
  },
});

export default Login;
